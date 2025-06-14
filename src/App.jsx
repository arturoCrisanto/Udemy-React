import MainHeader from "./components/MainHeader"
import PostList from "./components/PostList"
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  function onCloseModalHandler() {
  setModalIsOpen(false);
}
function onOpenModalHandler() {
  setModalIsOpen(true);
}

  return (
    <>
    <MainHeader onCreatePost={onOpenModalHandler}/>
      <main>
        <PostList 
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModalHandler}
        />
      </main>
    </>
  )
}

export default App
