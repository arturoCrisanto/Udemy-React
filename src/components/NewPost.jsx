import classses from './NewPost.module.css';

function NewPost(props) { 

  return (
    <form className={classses.form}>
        <p>
            <label htmlFor="body">text</label>
            <textarea id="author" required rows={3} onChange={props.onBodyChange}/>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
             <textarea id="body" required onChange={props.onAuthorChange} />
        </p>
    </form>
  )
}

export default NewPost