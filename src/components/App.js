import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyAnvsH03lIRraG4ypKT5NL5TheJfl - jR80";
class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
