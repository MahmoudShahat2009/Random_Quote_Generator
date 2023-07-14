//Use an array to hold the value of the quotes
// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");

// const url = "https://api.quotable.io/random";

// let getQuote = () => {
//   fetch(url)
//     .then((data) => data.json())
//     .then((item) => {
//       quote.innerText = item.content;
//       author.innerText = item.author;
//     });
// };

// window.addEventListener("load", getQuote);
// btn.addEventListener("click", getQuote);





var quotes = [
    {
        'author': 'Oscar Wilde',
        'quote' :'Be yourself; everyone else is already taken.'
     },
     {
        'author': '― Marilyn Monroe',
        'quote' :'Im selfish impatient and a little insecure. I make mistakes I am out of control and at times hard to handle. But if you cant handle me at my worst then you sure as hell dont deserve me at my best.'
     },
     {
        'author': '― Albert Einstein',
        'quote' :'Two things are infinite the universe and human stupidity; and Im not sure about the universe.'
     },
     {
        'author': '― Frank Zappa',
        'quote' :'So many books, so little time..'
     },
     {
        'author': '― Marcus Tullius Cicero',
        'quote' :'A room without books is like a body without a soul.'
     },
     {
        'author': '― Bernard M. Baruch',
        'quote' :'Be who you are and say what you feel, because those who mind don t matter, and those who matter don t mind..'
     },
     {
        'author': '― William W. Purkey',
        'quote' :'You have gotta dance like there is nobody watchin Love like you well never be hurt Sing like there is nobody listening And live like it is heaven on earth.'
     },
]
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");


btn.addEventListener("click", function(){
    var randomQuote =quotes[Math.floor(Math.random() * quotes.length)]; 
        quote.innerHTML = randomQuote.quote;
        author.innerHTML = randomQuote.author;
})

