import * as React from "react";
import { Link } from "wouter";


const Home = () => {
  return (
    <div>
      <h2>Welcome to my Shakespeare App!!!</h2>
      <h4>by Jesus Velarde</h4>
      <p>This web application is designed for use on a mobile device. It contains most* of Shakespeare's works along 
        with a word predictor (still in development).</p>
      <br />
      <h2>More on the Shakespeare Word Predictor</h2>
      <p>The word predictor takes in all of Shakespeares works and anylizes the text contents. It is based on word frequency of word use and 
        most likely next word is stored in a hash map (a data structure that maps every word to a list of most frequent following words). 
      </p>
      <h2>Sources</h2>
      <p><a className="ext-link" href="https://www.folgerdigitaltexts.org">https://www.folgerdigitaltexts.org</a> - API for word prediction</p>
      <p><a className="ext-link" href="https://github.com/okfn/shakespeare-material">https://github.com/okfn/shakespeare-material</a> - XML files for play material</p>
    </div>
  );
}

export default Home;