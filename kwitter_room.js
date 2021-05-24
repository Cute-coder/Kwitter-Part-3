
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBEIslJDC24VsYfLMZkgsXg4GqlcQumAiI",
      authDomain: "kwitter-c-94.firebaseapp.com",
      databaseURL: "https://kwitter-c-94-default-rtdb.firebaseio.com",
      projectId: "kwitter-c-94",
      storageBucket: "kwitter-c-94.appspot.com",
      messagingSenderId: "303130395801",
      appId: "1:303130395801:web:976a7f8e965bbb46d1e408"
    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +user_name + "!"; 

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - "+ Room_names);
      row="<div class='room_name' id=" + Room_names+" onClick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}