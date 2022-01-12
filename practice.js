
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyAhsN3nIC1tn-o0FNpiuzmCBdgY6Yf2sio",
  
    authDomain: "happy-new-year-63ef5.firebaseapp.com",
  
    databaseURL: "https://happy-new-year-63ef5-default-rtdb.firebaseio.com",
  
    projectId: "happy-new-year-63ef5",
  
    storageBucket: "happy-new-year-63ef5.appspot.com",
  
    messagingSenderId: "417421230738",
  
    appId: "1:417421230738:web:a321e62d8e312497e05c4b"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user = document.getElementById("user_name").value;
     localStorage.setItem("user",user);

     firebase.database().ref("/").child(user).update({
         purpose:"adding new user"
     });
     
}
//firebase is used to set the ref for adding data to the DB
//DB means we want to add data to the DB
//ref mean where we want to add the user name in the database
//"/" means we want to add the user name in the root as a main folder
//child() means it is a function use to give the name to the main folder
//.update() is the firebase function use to update value to the DB