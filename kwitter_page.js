//YOUR FIREBASE LINKS
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
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      name  = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id){
console.log("clicked on like button - "+ message_id);
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1 ;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}

function logout() {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function sends(){
     msg=document.getElementById("msg").value;
     
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      })
      document.getElementById("msg").value="";
}