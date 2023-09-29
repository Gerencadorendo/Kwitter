const firebaseConfig = {
  apiKey: "AIzaSyB3N7oKEEkvLR_R8i9b_4gq3qYi9CkWB_o",
  authDomain: "kwiiter-641da.firebaseapp.com",
  databaseURL: "https://kwiiter-641da-default-rtdb.firebaseio.com",
  projectId: "kwiiter-641da",
  storageBucket: "kwiiter-641da.appspot.com",
  messagingSenderId: "76128970303",
  appId: "1:76128970303:web:83b2858b04dfe7bc43ba8a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  
  
  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
      sala: "novaSala"
    });
    localStorage.setItem("roomName",roomName)
    window.location = "kwitterPage.html"
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='room Name' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  getData()

  function redirectToRoomName(name){
    localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html"
  }

  function logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location = "index.html"
  }