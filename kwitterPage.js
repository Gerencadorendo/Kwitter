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

userName = localStorage.getItem("userName")
roomName = localStorage.getItem("roomName")

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name: userName,
    message: msg,
    like: 0
  });
  document.getElementById("msg").innerHTML = "";
}

function getData() {
  firebase.database().ref("/" + roomName).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;

        console.log(firebaseMessageId);
        console.log(messageData);
        name = messageData['name'];
        message = messageData['message'];
        like = messageData['like'];
        nameWithTag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
        spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

        row = nameWithTag + messageWithTag + like_button + spanWithTag;
        document.getElementById("output").innerHTML += row;

      }
    });
  });
}
getData();

function updateLike(messageId) {
  button_id = messageId;
  likes = document.getElementById(button_id).value;
  updatedLikes = Number(likes) + 1;
  firebase.database().ref(roomName).child(messageId).update({
    like: updatedLikes
  });
}

function logout() {
  localStorage.removeItem("userName")
  localStorage.removeItem("roomName")
  window.location = "index.html"
}
