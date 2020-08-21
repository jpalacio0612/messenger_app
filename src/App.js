import React,{ useState, useEffect } from 'react';
import './App.css';
import { IconButton, FormControl, Input } from '@material-ui/core'
import Message  from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'


function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("")



  useEffect(()=>{
    //Run code here
    db.collection('messages')
      .orderBy('timestamp','desc')   
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, messages: doc.data()})))
      })
  },[]) // Condition

  useEffect(()=>{
    //Run code here
    setUsername(prompt('Please enter your name'))
  },[]) // Condition


  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }

 

  console.log(username)

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"></img>
      <h1>Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder={"Write a message..."} value={input} onChange={e => setInput(e.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>         
        </FormControl>
      </form>
        <FlipMove>
      { 
        messages.map((messages)=>(
          <Message  key={messages.id} username={username} message={messages.messages}/>
          ))
      }
        </FlipMove>

    </div>
  );
}

export default App;
