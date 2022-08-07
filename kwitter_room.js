
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD23khMgFb5lBegVHSiumRNM-EMWHiuwKs",
      authDomain: "classtest-3838c.firebaseapp.com",
      databaseURL: "https://classtest-3838c-default-rtdb.firebaseio.com",
      projectId: "classtest-3838c",
      storageBucket: "classtest-3838c.appspot.com",
      messagingSenderId: "713375430208",
      appId: "1:713375430208:web:194f3a9511e8cd903bd1a5"
    };
    firebase.initializeApp(firebaseConfig);
    
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";

     function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id= "+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

 function redirectToRoomName(name)
 {
       console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
 }

 function logout() 
 { 
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name"); 
       window.location = "index.html"; 
}