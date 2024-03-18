
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBdWFT_T_c64Eh7Wks11wi-l4XAQCT4ZlE",
    authDomain: "it-project-111da.firebaseapp.com",
    projectId: "it-project-111da",
    storageBucket: "it-project-111da.appspot.com",
    messagingSenderId: "556669912347",
    appId: "1:556669912347:web:1f8d6ec2ef27e585f4bfbe"
  };

 


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics =  getAnalytics(app)
  const auth = getAuth()


//getting id from html
  let loginemail = document.getElementById("loginemail")
  let loginpassword = document.getElementById("loginpassword")
  let signupemail = document.getElementById("signupemail")
  let signuppassword = document.getElementById("signuppassword")


  window.signup = function(e){
    e.preventDefault();

    var obj = {
        email: signupemail.value,
        password: signuppassword.value
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("You have successfully created account ")
    })
    .catch(function(err){
        alert(err)
    })
  }


  //login function
  window.login = function(e){
    e.preventDefault();

    var obj = {
        email: loginemail.value,
        password: loginpassword.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("You are signed up")
    })
    .catch(function(err){
        alert("Error signing up")
    })
  }


