const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCxVt8ZRpRcB5qRdO1QzudqNK_iMYchWDk",
    authDomain: "contactform-75f70.firebaseapp.com",
    databaseURL: "https://contactform-75f70-default-rtdb.firebaseio.com",
    projectId: "contactform-75f70",
    storageBucket: "contactform-75f70.firebasestorage.app",
    messagingSenderId: "909555176244",
    appId: "1:909555176244:web:e0554cb060bc5d2f1bcb61"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactform");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  