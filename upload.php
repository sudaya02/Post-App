<?php 

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); 

$conn=mysqli_connect('localhost','root','','post-app');

if(isset($_POST['name'])){

    if($_POST['name'] == '' ){
        echo 'Please Add Required Data!';
    }
    else{

    $files=$_FILES['picture'];
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $content=mysqli_real_escape_string($conn,$_POST['content']);

    

    $filename = $files['name'];
    $templocation=$files['tmp_name'];
    $uploaderrors=$files['error']; 

    $splitedname=explode('.',$filename);
    $fileextension=strtolower(end($splitedname));

    $allowed_extension=['png','jpg','jpeg'];

    if(in_array($fileextension, $allowed_extension)){
        $new_file_name=uniqid().'.'.$fileextension;
        $file_destination='public/assets/images/'.$new_file_name;
        if(move_uploaded_file($templocation, $file_destination)){
            $connection="INSERT INTO app_posts (post_name,post_content,post_url) VALUES('$name','$content','$new_file_name')";
            if(mysqli_query($conn,$connection)){
                echo 'New Post Added!';
            }
        }
    }
}
}

if(isset($_POST['fetch'])){
    $query='SELECT * FROM app_posts WHERE post_deleted=0';
    $result=mysqli_query($conn,$query);
    $posts=mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($posts);
}