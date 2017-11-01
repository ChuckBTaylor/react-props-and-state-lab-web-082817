import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {this.props.pet.name} Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ?
            <button onClick={this.handleClick} className="ui primary button">Adopt pet</button> :
            <button className="ui disabled button" disabled>Already adopted</button>
          }

        </div>
      </div>
    );
  }
}

export default Pet;
