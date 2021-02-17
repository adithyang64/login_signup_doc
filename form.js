
  var firebaseConfig = {
    apiKey: "AIzaSyDc393TaAR6v8zih0uRWH9XA_uQa-psU5Y",
    authDomain: "login-signup-doc.firebaseapp.com",
    projectId: "login-signup-doc",
    storageBucket: "login-signup-doc.appspot.com",
    messagingSenderId: "292861350390",
    appId: "1:292861350390:web:50c65a2edcab4d1af937d7",
    measurementId: "G-W6CXJ7HMFW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
  }
  
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
  }
  
  function signOut(){
    auth.signOut();
    alert("Signed Out");
    return window.location.href='index.html';
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      // alert("Active User " + email);
      return window.location.href='home_page.html';
      //Take user to a different or home page

      //is signed in
      
    }else{
      alert("No Active User");
      //no user is signed in
    }
  });

