
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDGe8JrDCG8jcVe4V10eGjvASbUvbtSPks",
      authDomain: "kwitter-6c8c4.firebaseapp.com",
      databaseURL: "https://kwitter-6c8c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c8c4",
      storageBucket: "kwitter-6c8c4.appspot.com",
      messagingSenderId: "712662314585",
      appId: "1:712662314585:web:f249cbe084d525772d8b48"
    };
    
  
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name= localstorage.getItem("user name");
     document.getElementById("user_name").innerHTML=
     "Welcome" + user_name + "!";
     function addRoom()
     {
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding room_name"
           });localStorage.setItem("room_name",room_name);
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("room_name-"+Room_names);
      row="<div class= room_name id="+Room_names+" onclick= "redirectToRoomName(this.id)" >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}
