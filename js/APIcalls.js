$.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function (response) {
    var quoted = response.quote;
    var authored = response.author;
       $("#inspire-quoteofday").append(quoted);
       $("#inspire-quoteofdayauth").append("- " + authored);
    });
    
$.getJSON('http://numbersapi.com/random/date?json', function (response) {
   //  console.log(response);
         var date = response.year;
            // console.log(date);
            // console.log(typeof date);
         var numDate = Number(date).toString();
            // console.log(numDate)
            // console.log(typeof numDate)
         var dateText1 = response.text;
   $("#factNum1").append(date);
   $("#factText1").append(dateText1);
});

$.getJSON('http://numbersapi.com/random/math?json', function (response) {
         // console.log(response); 
         var math = response.number;
         var mathDate = Number(math).toString();
         var mathText = response.text;  
         // console.log(mathDate);
         // console.log(mathText);    
         $("#factNum2").append(mathDate);
         $("#factText2").append(mathText);
});

$.getJSON('http://numbersapi.com/random/trivia?json', function (response) {
           // console.log(response); 
           var trivia = response.number;
           var triviaNum = Number(trivia).toString();
           var triviaText = response.text;  
           // console.log(mathDate);
           // console.log(mathText);    
           $("#factNum3").append(triviaNum);
           $("#factText3").append(triviaText);
});

$.getJSON('http://numbersapi.com/random/year?json', function (response) {
            //  console.log(response);
            var date = response.number;
            // console.log(date);
            // console.log(typeof date);
            var numDate = Number(date).toString();
            // console.log(numDate)
            // console.log(typeof numDate)
            var dateText1 = response.text;
            $("#factNum4").append(date);
            $("#factText4").append(dateText1);
            
   });
    