import React, { Component, useRef, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
export const AppContext = React.createContext();
export const Provider = AppContext.Provider;

const BInsertForm = () => {
    const [data, setdata] = useState([]);
    const [response, setresponse] = useState("");
    const [name, setname] = useState("");
    const [content, setcontent] = useState("");
    const selectedFile = useRef();
    const [users, setusers] = useState([]);
    

    const retriever=async()=>{
        var xhr=new XMLHttpRequest()
        xhr.open('POST', 'http://localhost/Budget/post-app/upload.php', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload=function(){
           setdata(JSON.parse(this.responseText));
        }

        xhr.send('fetch')
    
    }

    retriever();

    const uploader=async()=>{
       
        const formData=new FormData()
        formData.append('picture',selectedFile.current.files[0]);
        formData.append('name',name);
        formData.append('content',content);

        var xhr= new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/Budget/post-app/upload.php', true);

        xhr.onload=function(){
            setresponse(this.responseText);
            retriever();
         }
        
        xhr.send(formData)
    };

    const deleteConfirm = (post_id) => {
        if (window.confirm("Are you sure?")) {
          deleteUser(post_id);
        }
      };

      // Deleting a user.
  const deleteUser = (theID) => {

      fetch("http://localhost/Budget/post-app/delete.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post_id: theID }),
      })
        .then((res) => {
          return res.json();
        })

    
};

const postLike = (post_id) => {

    fetch("http://localhost/Budget/post-app/likes.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: post_id }),
    })
      .then((res) => {
        return res.json();
      })

  
};

const postDislike = (post_id) => {

    fetch("http://localhost/Budget/post-app/dislikes.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: post_id }),
    })
      .then((res) => {
        return res.json();
      })

  
};
    
        return (
            
            
            <>
            <div className='form-card'>
                <h1 className='headingH2'>New Post</h1>
                <div className='post-form'>
                    <p className='text-info'>{response}</p>
                    <input type='text' placeholder='Title' name='bTitle' className='text-input' onChange={(e)=> setname(e.target.value)}></input>
                    <textarea placeholder='Content' name='bText' className='text-input'  onChange={(e)=> setcontent(e.target.value)}></textarea>
                    <div className='d-flex justify-content-between mt-1'><input type='file' name='bFile' ref={selectedFile}></input>
                    <button className='btn main-btn' onClick={uploader}>POST</button></div>
                </div>
            </div>
            <h1 className='headingH1 pt-4 ps-3'>My Posts</h1>
            {data.map(({post_id, post_name, post_content, post_url, post_likes, post_dislikes})=>{
                return(
                    <div className='form-card'>
                    <img src={`../assets/images/${post_url}`} className='post-image' width='100%'/>
                    <h1 className='headingH2 padding-0 pt-4'>{post_name}</h1>
                    <p>{post_content}</p>
                    <div className='control-options d-flex justify-content-between align-items-center' key={post_id}>
                        <a href='' className='user-name' onClick={() => deleteConfirm(post_id)}
                >X Remove</a>
                        
                        <div className='like-icons'>
                            <a href='' onClick={() => postLike(post_id)}><FontAwesomeIcon className='a1 fs-5' icon={faThumbsUp} /></a> {post_likes} Likes <a href='' className='ms-2 fs-5' onClick={() => postDislike(post_id)}><FontAwesomeIcon className='d4' icon={faThumbsDown} /></a> {post_dislikes} Dislikes
                        </div>
                    </div>
                    </div>
                )
            })}
            </>
        )

        
    
}
 
export default BInsertForm;
