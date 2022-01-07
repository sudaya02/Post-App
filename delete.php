<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn=mysqli_connect('localhost','root','','post-app');

$data = json_decode(file_get_contents("php://input"));

if (isset($data->post_id) && is_numeric($data->post_id)) {
    $delID = $data->post_id;
    $deleteUser = mysqli_query($conn, "UPDATE `app_posts` SET post_deleted=1  WHERE `post_id`='$delID'");
    if ($deleteUser) {
        echo 'Post Deleted!';
    } else {
        echo 'Post Not Found!';
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Post Not Found!"]);
}