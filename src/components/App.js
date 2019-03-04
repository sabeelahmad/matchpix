import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  /* This method will be passed down as a prop to the SearchBar Component
  The main function of this is to get the search term from the search component
  since there is no way to pass props up the hierarchy we pass this as a prop
  to the child (basically acts as a callback) */
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
