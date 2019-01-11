

/*=======================================
-----------------------------------------
        FIREBASE / CONTACT FORM
-----------------------------------------
=========================================*/
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8CtovO7LW4FGFVc6l5MNQJbESd4BBJGU",
    authDomain: "melvyn-ac0b4.firebaseapp.com",
    databaseURL: "https://melvyn-ac0b4.firebaseio.com",
    projectId: "melvyn-ac0b4",
    storageBucket: "melvyn-ac0b4.appspot.com",
    messagingSenderId: "787906090509"
  };
  firebase.initializeApp(config);
  
  var formData = firebase.database().ref();

  $('#contactFormBtn').on('click',function(){



      var name =$("#name").val().trim();
      var email =$("#email").val().trim(); 
      var telNum =$("#phone").val().trim(); 
      var subject =$("#subject").val().trim(); 
      var message =$("#message").val().trim(); 

      var newMessage = {
          name:name, 
          email:email,
          telNum:telNum,
          subject:subject,
          message:message
      };

      formData.push("NewMessage").set(newMessage);

      alert("Your Message has been recieved! I will get back to you shortly!");

            $("#name").val("");
            $("#email").val(""); 
            $("#phone").val(""); 
            $("#subject").val(""); 
            $("#message").val(""); 

      return false;

  });
