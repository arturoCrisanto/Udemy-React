import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import classes from './PostList.module.css';
import {useState} from 'react';
import Modal from './Modal.jsx';

function PostList({modalIsOpen, onCloseModal}) {

  return (
    <>
    {modalIsOpen ? 
    <Modal onCloseModal={onCloseModal}>
    <NewPost 
        onCloseModal={onCloseModal}
        />
    </Modal>
     : null}
    

    <ul className={classes.post}>
        <Post author="2" body="WEWWEA"/>
    </ul>
    </>
  )
}

export default PostList