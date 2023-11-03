import './App.css';
import Card from './Components/Card/Card';
import posts from './posts.json';
import { useState } from 'react';

function App() {

  const [arr, setArr] = useState(posts);

  function delPost(id){
    const copyArr = [...arr];
    const resultArr = copyArr.filter(item => item.id !== id);
    setArr(resultArr);
  }

  function addPost(){
    const newPost = {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
    const updatedArr = [...arr, newPost];
    setArr(updatedArr);
  }
  return (
    <>
      {  arr.map((item, index) => <Card object={item} delPost={delPost} key={index}/>) }
      <button onClick={addPost}>add post</button>
    </>
  )
}

export default App
