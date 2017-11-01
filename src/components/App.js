import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (newType) => {
    const newState = {filters: { type: newType}}
    this.setState(newState)
  }

  onAdoptPet = (petId) => {
    const newState = {adoptedPets: this.state.adoptedPets.concat(petId)}
    this.setState(newState)
  }

  onFindPetsClick = () => {
    const term = this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`
    fetch(`/api/pets${term}`)
    .then(res => res.json())
    .then(json => {
      const newPets = {pets: json}
      this.setState(newPets)
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser filterType={this.state.filters.type} pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
