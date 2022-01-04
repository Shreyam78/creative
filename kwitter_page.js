//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCYYLBX-cemsO8PTCOpsGHUR9al0w60fI0",
      authDomain: "kwitter-ffb41.firebaseapp.com",
      databaseURL: "https://kwitter-ffb41-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb41",
      storageBucket: "kwitter-ffb41.appspot.com",
      messagingSenderId: "797474293258",
      appId: "1:797474293258:web:6c75ce2e2ab55ef4d081f3",
      measurementId: "G-J4M2QYQRFB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("key");
room_name = localStorage.getItem("room_name"); 

function sb() {
      msg = document.getElementById("bla").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("bla").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
