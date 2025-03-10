import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import NewsFeed from './NewsFeed.js';
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Catpanions from './Catpanions.js';
import Profile from "./Profile.js";
import Signup from "./Signup.js";
import MeowMail from "./MeowMail.js";
import MyAccount from "./MyAccount.js"

function App() {
  //set our logged in user with login or signup
  const [currentUser, setCurrentUser] = useState(false) 
  //keep track of our logged in user's catpanions during current session

  // fetch the logged in user when app loads if there is a user
  useEffect(() => {
    fetch("/me")
    .then(res => res.json())
    .then((user) => {
      setCurrentUser(user)
    })
  }, []);

  return (
    <div className="App">
      {currentUser ? <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <SignupNavBar />}
      <Routes>
        <Route path={currentUser ? "/newsfeed" : "/"} element={currentUser ? <NewsFeed currentUser={currentUser}/> : <Login setCurrentUser={setCurrentUser}/>} />
        <Route path="signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="mycatpanions" element={<Catpanions currentUser={currentUser} />} />
        <Route path="me" element={<Profile currentUser={currentUser}/>}/>
        <Route path="messaging" element={<MeowMail currentUser={currentUser}/>}/>
        <Route path="myaccount" element={<MyAccount currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
