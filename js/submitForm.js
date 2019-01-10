
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  

var form = $("contactFormBtn");

/*=======================================
-----------------------------------------
        FIREBASE / CONTACT FORM
-----------------------------------------
=========================================*/

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbgXS6nQAyPfV3rLfE4tsbAgObfWQBaH8",
    authDomain: "melsport.firebaseapp.com",
    databaseURL: "https://melsport.firebaseio.com",
    projectId: "melsport",
    storageBucket: "melsport.appspot.com",
    messagingSenderId: "753747784706"
  };
  firebase.initializeApp(config);
  
  var formData = firebase.database();

  $('#contactFormBtn').on('click',function(){

    form.validate();
    

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
      }

      formData.ref().push(newMessage);

      alert("Your Message has been recieved! I will get back to you shortly!")

            $("#name").val("");
            $("#email").val(""); 
            $("#phone").val(""); 
            $("#subject").val(""); 
            $("#message").val(""); 

      return false;

  });
