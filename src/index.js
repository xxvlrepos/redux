import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBQgkv6ijkgVyepFhWxly8MECwbuD1tv5M";

// create a new component 
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
  };


//rake this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
asdasd