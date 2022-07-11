const firebaseConfig = {
    apiKey: "AIzaSyAk-OE26s11q48nQuvs-IzbiEJvea_joMg",
    authDomain: "fashionform-55cc0.firebaseapp.com",
    databaseURL: "https://fashionform-55cc0-default-rtdb.firebaseio.com",
    projectId: "fashionform-55cc0",
    storageBucket: "fashionform-55cc0.appspot.com",
    messagingSenderId: "1026920144869",
    appId: "1:1026920144869:web:1f80e1eaa0179be0ac590c"
};


firebase.initializeApp(firebaseConfig);

var fashionformdb = firebase.database().ref('fashionform');

document.getElementById('fashionform').addEventListener('submit',submitform); 

function submitform(e){
  e.preventDefault();

  var email = getElementVal('email');
  var password = getElementVal('password');
  var cpassword = getElementVal('cpassword');



  saveMessages(email,password,cpassword);



}
const saveMessages = (email, password, cpassword) =>{
  var newshippingform = fashionformdb.push();

  newshippingform.set({
      email : email,
      password : password,
      cpassword : cpassword,

  })
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}