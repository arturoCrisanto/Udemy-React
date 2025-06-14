import classses from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onCloseModal}) { 
    const [enteredBody, setBody] = useState('dina karigo hi alexa');
    const [enteredAuthor, setAuthor] = useState('alexa');


function onBodyChangeHandler(event) {
  setBody(event.target.value);
}
function onAuthorChangeHandler(event) {
  setAuthor(event.target.value);
}

function onSubmitHandler(event) {
  event.preventDefault();
  const postData = {
    body: enteredBody,
    author: enteredAuthor
  };
  console.log(postData);
  onCloseModal();
}


  return (
    <form className={classses.form} onSubmit={onSubmitHandler}>
        <p>
            <label htmlFor="body">text</label>
            <textarea id="author" required rows={3} onChange={onAuthorChangeHandler}/>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
             <textarea id="body" required onChange={onBodyChangeHandler} />
        </p>
        <p className={classses.actions}>
          <button type="button" onClick={onCloseModal}>Cancel</button>
          <button type="submit">Create Post</button>
        </p>
    </form>
  )
}

export default NewPost