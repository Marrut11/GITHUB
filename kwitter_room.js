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

 function addRoom(){
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            room_name:"mistake"
       });
       localStorage.setItem("room",room_name);
       window.location="kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
console.log("the room name are" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
//ADD YOUR FIREBASE LINKS HERE

      });});}
getData();


//the above code is use to get all the room names from the firebase

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout() {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}