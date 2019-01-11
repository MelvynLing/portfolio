// var request = require('request');
// var unirest = require('unirest');

// unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10")
// .header("X-Mashape-Key", "w6pXkm2Gp3mshyMUsldw8ZXSOWC9p1bOQhBjsnhy5gFVt1dJXw")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

  $.getJSON('https://quotes.rest/qod.json?category=inspire', function (response) {
   console.log(response);
    var quoted = response.contents.quotes[0].quote;
    console.log(quoted);
    var authored = response.contents.quotes[0].author;
    console.log(authored);
      $("#inspire-quoteofday").append(quoted);
      $("#inspire-quoteofdayauth").append("- " + authored);
   });
   

   //below was used for counter stats, but kept running into CORS errors.
   
// $.getJSON('http://numbersapi.com/random/date?json', function (response) {
//    console.log(response);
//         var date = response.year;
//            // console.log(date);
//            // console.log(typeof date);
//         var numDate = Number(date).toString();
//            // console.log(numDate)
//            // console.log(typeof numDate)
//         var dateText1 = response.text;
//   $("#factNum1").append(date);
//   $("#factText1").append(dateText1);
// });

// $.getJSON('http://numbersapi.com/random/math?json', function (response) {
//         console.log(response); 
//         var math = response.number;
//         var mathDate = Number(math).toString();
//         var mathText = response.text;  
//         // console.log(mathDate);
//         // console.log(mathText);    
//         $("#factNum2").append(mathDate);
//         $("#factText2").append(mathText);
// });

// $.getJSON('http://numbersapi.com/random/trivia?json', function (response) {
//           console.log(response); 
//           var trivia = response.number;
//           var triviaNum = Number(trivia).toString();
//           var triviaText = response.text;  
//           // console.log(mathDate);
//           // console.log(mathText);    
//           $("#factNum3").append(triviaNum);
//           $("#factText3").append(triviaText);
// });

// $.getJSON('http://numbersapi.com/random/year?json', function (response) {
//             console.log(response);
//            var date = response.number;
//            // console.log(date);
//            // console.log(typeof date);
//            var numDate = Number(date).toString();
//            // console.log(numDate)
//            // console.log(typeof numDate)
//            var dateText1 = response.text;
//            $("#factNum4").append(date);
//            $("#factText4").append(dateText1);
           
//   });
    