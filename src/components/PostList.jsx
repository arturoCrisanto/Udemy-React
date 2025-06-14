import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import classes from './PostList.module.css';
import {useState} from 'react';
import Modal from './Modal.jsx';

function PostList({modalIsOpen, onCloseModal}) {
    const [enteredBody, set] = useState('dina karigo hi alexa');
    const [author, setAuthor] = useState('alexa');


function onBodyChangeHandler(event) {
  set(event.target.value);
}
function onAuthorChangeHandler(event) {
  setAuthor(event.target.value);
}

  return (
    <>
    {modalIsOpen ? 
    <Modal onCloseModal={onCloseModal}>
    <NewPost 
        onBodyChange={onBodyChangeHandler}
        onAuthorChange={onAuthorChangeHandler}
        />
    </Modal>
     : null}
    

    <ul className={classes.post}>
        <Post author={author} body={enteredBody}/>
        <Post author="2" body="WEWWEA"/>
    </ul>
    </>
  )
}

export default PostList