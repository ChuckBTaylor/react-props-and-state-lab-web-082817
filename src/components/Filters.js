import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (ev) => {
    this.props.onChangeType(ev.target.value)
  }

  onFindPetsClick = (ev) => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.props.filters.type} name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
