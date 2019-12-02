import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './guessai/index.scss';
import cmuLogo from './image/CMU_Logo.png'
import GuessAI from './guessai/guessai.js'
import Home from './home.js'
import GAIHome from './guessAIHome.js'
import * as firebase from 'firebase/app';

require('dotenv').config()
require("firebase/firestore");
require("firebase/auth");

const profiles = ["fas fa-otter", "fas fa-hippo", "fas fa-dog", "fas fa-crow", "fas fa-horse", "fas fa-frog", "fas fa-fish", "fas fa-dragon", "fas fa-dove", "fas fa-spider", "fas fa-cat"]
/* global gapi */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      players: [],
      gameClass: [" ", " "],
    }
    this.googleUser = null;
    this.uid = "";
    this.db = null;
    this.timestamp = null;
  }

  componentDidMount() {    
    window.addEventListener('beforeunload', this.handleLeavePage.bind(this));
    window.gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '423634020815-9pu8kc2gfh3s7rejq6d7k1nmcaqn70d4.apps.googleusercontent.com',
        scope: 'profile'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.handleAuthChange();
        this.auth.isSignedIn.listen(this.handleAuthChange);
      });
    })
    if (!this.db) {
      let firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey, 
        authDomain: process.env.REACT_APP_authDomain, 
        databaseURL: process.env.REACT_APP_databaseURL,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
      };
   
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      this.db = firebaseApp.firestore();
    }
    
    window.gapi.signin2.render('g-signin2', {
      'theme': 'dark',
      'onsuccess': this.onSuccess.bind(this),
    });  

    this.selectProfile();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleLeavePage.bind(this));
  }

  handleAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  handleSignIn = () => {
    this.auth.signIn();
  };

  handleSignOut = () => {
    this.auth.signOut();
  };
  
  handleLeavePage = (e) => {
    this.signOut();
    e.preventDefault();
    e.returnValue = true;
  }
    
  
  
  selectProfile(){
    //randomly select players' profile
    let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let ran1, ran2, ranTemp;
    for (let i = 0; i < 10; i++) {
      ran1 = Math.floor(Math.random() * 11);
      ran2 = Math.floor(Math.random() * 11);

      ranTemp = ranNum[ran1];
      ranNum[ran1] = ranNum[ran2];
      ranNum[ran2] = ranTemp;
    }
    const players = [];
    players.push(this.constructPlayer(profiles[ranNum[0]]));
    players.push(this.constructPlayer(profiles[ranNum[1]]));
    players.push(this.constructPlayer(profiles[ranNum[2]]));
    this.setState({ players: players });
  }

  constructPlayer(name) {
    return {
      img: <i className={name}></i>,
      name: name.slice(7),
      score: 0,
    };
  }

  // Change the url depending on the pages
  setMenu(i) {
    const menuClass = [' ', ' '];
    menuClass[i] = 'active';
    this.setState({ gameClass: menuClass });
  }
  
  onSuccess(googleUser) {
    if (this.state.isSignedIn) {
      this.signOut();
    } else {
      
      function isUserEqual(googleUser, firebaseUser) {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      firebase.auth().onAuthStateChanged((function(firebaseUser) {
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.getAuthResponse().id_token);
          // Sign in with credential from the Google user.
          firebase.auth().signInWithCredential(credential).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        } else {
          this.uid = firebaseUser.uid;
          console.log('User already signed-in Firebase.');
        }
      }).bind(this));
      let playerProfile =  googleUser.getBasicProfile();
      let players = this.state.players;
      players[0].img = <i className={players[0].name}><img src={playerProfile.getImageUrl()}></img></i>;
      players[0].name = playerProfile.getGivenName();
      this.googleUser = googleUser;
      this.setState({players: players});
    }
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  startNewLog() {
    this.timestamp  =  Date.now();
    var usersUpdate = {};
    usersUpdate[`${this.timestamp}`] = {playerEmail: this.googleUser.getBasicProfile().getEmail(), playerId: this.googleUser.getBasicProfile().getGivenName(), versionNumber: "v1", totalPoints: 0};
    this.db.collection("gameLogs").doc(this.uid).set(usersUpdate, {merge: true});

  }

  update(fieldAndvalue) {
    var usersUpdate = {};
    usersUpdate[`${this.timestamp}`] = fieldAndvalue;
    this.db.collection("gameLogs").doc(this.uid).set(usersUpdate, {merge: true});
  }

  signOut() {
    this.auth.signOut().then(function () {
    });
    this.auth.disconnect();
  }

  render() {
    return (
      <HashRouter basename = "/">
        <div className="App" style={{ width: "100%", height: "100%", position:"relative"}} key="main">
          <div className="header" >
            <div id="cmu">
              <img src = {cmuLogo} alt="CMU logo" /></div>
              
              <Link to="/home/" className="title" onClick={(ev)=> {this.setState({ gameClass: [" ", " "]}); }}>Interpretable Machine Learning Research Project</Link>
              <div className = "menuBar">
            
              <Link to="/guessai/" className={"menu " + this.state.gameClass[0]} key="menu0" onClick={(ev)=> {
                this.setState({ gameClass: ["active", " "]}); 
              }}>Guess AI</Link>
              <div id="g-signin2" onClick={(env) => {this.signOut.bind(this)}}></div>
              </div>
            </div>
          
              <Route path ="/" exact render={props => <Home isSignedIn = {this.state.isSignedIn} setMenu = {this.setMenu.bind(this)} />} />
              <Route path ="/home/" render={props => <Home isSignedIn = {this.state.isSignedIn} setMenu = {this.setMenu.bind(this)} />} />
              <Route path = "/guessai/" render={props => <GAIHome  players = {this.state.players} startNewLog={this.startNewLog.bind(this)} update={this.update.bind(this)} setMenu = {this.setMenu.bind(this)}/>} />
              <Route path = "/guessai-play/" render = {props => <GuessAI key = "guessAI" players = {this.state.players} update={this.update.bind(this)} setMenu = {this.setMenu.bind(this)} handleLeavePage = {this.handleLeavePage.bind(this)}/>}  />
          
        </div>
      </HashRouter>
    );
  }
}
export default App;