const quotes = [
  {
    quote: 'Be yourself, everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'So many books, so little time.',
    author: 'Frank Zappa',
  },
  {
    quote: 'A room without books is like a body without a soul.',
    author: 'Marcus Tullius Cicero',
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: 'Robert Louis Stevenson',
  },
  {
    quote:
      'You will face many defeats in life, but never let yourself be defeated.',
    author: 'Maya Angelou',
  },
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    author: 'Colin R. Davis',
  },
];

const quote = document.querySelector('div#quote span:first-child');
const author = document.querySelector('div#quote span:last-child');

const ramdomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ramdomQuote.quote;
author.innerText = ramdomQuote.author;
