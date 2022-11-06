const quotes = [
  {
    quotes: "1st",
    author: "unknown",
  },
  {
    quotes: "2nd",
    author: "unknown",
  },
  {
    quotes: "3rd",
    author: "unknown",
  },
  {
    quotes: "4th",
    author: "unknown",
  },
  {
    quotes: "5th",
    author: "unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
