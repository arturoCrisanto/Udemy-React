import classses from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, onCloseModal}) { 

  return (
    <form className={classses.form}>
        <p>
            <label htmlFor="body">text</label>
            <textarea id="author" required rows={3} onChange={onBodyChange}/>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
             <textarea id="body" required onChange={onAuthorChange} />
        </p>
        <p className={classses.actions}>
          <button type="button" onClick={onCloseModal}>Cancel</button>
          <button type="submit">Create Post</button>
        </p>
    </form>
  )
}

export default NewPost