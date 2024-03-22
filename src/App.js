import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  return (
    <main>
      <h1>Project3:Quote Generator</h1>
      <section>
        <button onClick={() => setQuote(getRandomQuote(quotes))}>
          New Quote
        </button>
        <h3>
          <span>" {quote.text}</span>
        </h3>
        <i>- {quote.author}</i>
      </section>
    </main>
  );
};

export default App;
