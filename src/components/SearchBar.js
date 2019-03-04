import React from "react";

// Class based - because we will need state

class SearchBar extends React.Component {
  // State helps in creating controlled components
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    // Calling the callback
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
