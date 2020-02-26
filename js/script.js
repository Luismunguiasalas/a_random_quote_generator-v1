/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

  {
    "quote": "I can do everything through Christ who give me strength.",
    "source": "Philippians",
    "citation": "4:13",
  },

  {
    "quote": "Rockets are cool. There's no getting around that.",
    "source": "Elon Musk",
    "year": 2013
  },

  {
    "quote": "I Fear the day that technology will surpass our human interaction. The world will have a generation of idiots.",
    "source": "Albert Einstein",
    "year": 1956
  },

  {
    "quote": "I have not failed, I've just found 10,000 ways that won't work.",
    "source": "Psalm",
    "citation": "34:10b",
  },

  {
    "quote": "It's not the years in your life that count. It's the life in your years.",
    "source": "Abraham Lincoln"
  },

  {
    "source": "Elon Musk",
    "quote": "When something is Important enough, you do it even if the odds are against you",
  },

  {
    "source": "Henry Ford",
    "quote": "Whether you think you can or think you cant, your probably right.",
  },

  {
    "source": "Sarah Silverman",
    "quote": "So I'm licking jelly off my boyfriend and all of a sudden, I'm thinking.. I'm turning into my mother!",
    "year": 2014
  },

]


/***
 * `getRandomQuote` function
***/

let getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * 8);
  let randomQuoteObject = quotes[randomNumber]
  return randomQuoteObject;

}


/***
 * `printQuote` function
***/
const printQuote = () => {

  let returnedObject = getRandomQuote();
  let theHTMLString = `<p class="quote"> ${returnedObject.quote} </p> <p class="source"> ${returnedObject.source}`;
  if (returnedObject.citation) {
    theHTMLString += `<span class="citation">${returnedObject.citation}</span>`;;
  } else if (returnedObject.year) {
    theHTMLString += `<span class="year">${returnedObject.year}</span>`;
  }
  theHTMLString += `</p>`;

  return document.getElementById('quote-box').innerHTML = theHTMLString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);