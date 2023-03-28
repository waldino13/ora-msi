var firebaseConfig = {
      databaseURL:"https://wasaaldo-fa073-default-rtdb.firebaseio.com/",
      apiKey: "AIzaSyAYkM8oMglBwVjIfVlVXwh9EYuRiXvMVo4",
      authDomain: "wasaaldo-fa073.firebaseapp.com",
      projectId: "wasaaldo-fa073",
      storageBucket: "wasaaldo-fa073.appspot.com",
      messagingSenderId: "767519005723",
      appId: "1:767519005723:web:287373875d4a53bd836cbe"
    };
    
    firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");

document.getElementById("username").inerHTML="wasa" + username + "wasa";

function addroom(){

roomname=document.getElementById("roomname").value;


firebase.database().ref("/").child(roomname).update({

      purpose:"añade nombre de sala"
});
localStorage.setItem("roomname",roomname);
window.location.replace("kwitter_page.html");


}
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name"+ Room_names);
row = "<div class= 'roomname' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getRoom();
function logout(){


localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location.replace("index.html");

}



function redirectToRoomName(Room_names){
      console.log(Room_names);
      localStorage.setItem("roomname",Room_names );
      window.location= "kwitter_page.html";






}
