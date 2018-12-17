$.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?', function (response) {
    // console.log(response)
    
    var quote = response[0].content;
    var author = response[0].title;
    
    // console.log(quote)
    // console.log(author)

       $("#inspire-quoteofday").append(quote);
       $("#inspire-quoteofdayauth").append("- " + author);
    });