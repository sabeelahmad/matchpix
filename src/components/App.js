import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  /* This method will be passed down as a prop to the SearchBar Component
  The main function of this is to get the search term from the search component
  since there is no way to pass props up the hierarchy we pass this as a prop
  to the child (basically acts as a callback), this callback needs to be binded
  in order to avoid issues with this keyword. */
  onSearchSubmit = async term => {
    // Making a request to the unsplash API using Async/Await
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
