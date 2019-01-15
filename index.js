var randomQuote = document.getElementById("randomQuote");
var author = document.getElementById("author");
var button = document.getElementById("button");
// button.addEventListener("click", function() {
//   randomQuote.insertAdjacentHTML("beforeend", "Random Quote");
//   author.insertAdjacentHTML("beforeend", "Author");
// });
$(document).ready(function(){
  getQuote();
  function getQuote(){
  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    $(randomQuote).html('"'+data.quoteText+'"');
    if (!data.quoteAuthor) {
      $(author).html("-Anonymous");
    } else {
    $(author).html("-"+data.quoteAuthor);
    }
  });
};
  $(button).on("click", function(){
    getQuote();
  });
   $("#twitter").on("click", function(){
      console.log(randomQuote);
window.open("https://twitter.com/intent/tweet?text="+$(randomQuote).html()+' '+$(author).html()
  );
}); 
});