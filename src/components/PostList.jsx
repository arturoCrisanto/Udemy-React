import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import classes from './PostList.module.css';
import {useState} from 'react';
import Modal from './Modal.jsx';

function PostList({modalIsOpen, onCloseModal}) {
  const [posts, setPosts] = useState([]);
  
function onCreatePostHandler(postData) {
  setPosts((prevPosts) => {
    return [postData, ...prevPosts];
  });
}


  return (
    <>
    {modalIsOpen ? 
    <Modal onCloseModal={onCloseModal}>
    <NewPost 
        onCloseModal={onCloseModal}
        // this function is passed to the NewPost component
        // so that it can call it when a new post is created
        onCreatePost={onCreatePostHandler}
        />
    </Modal>
     : null
     }

    {posts.length > 0 && 
        <ul className={classes.post}>
          {posts.map((post, index) => (
            <Post 
              key={index}
              // the post object has body and author properties in the NewPost component
              // so we can destructure them here
              body={post.body}
              author={post.author}
            />
          ))}
        </ul> 
    }
    {posts.length === 0 &&
      <p className={classes.noPosts}>No posts yet. Create one!</p>
    }
    </>
  )
}

export default PostList