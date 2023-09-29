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

function addUser() {
  username = document.getElementById("userName").value;
  firebase.database().ref("/").child(username).update({
    chave: "valor"
  });
}