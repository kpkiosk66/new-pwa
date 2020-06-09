import React , { Component } from 'react';

import Counter from './Counter.jsx'
import '../App.css';

class Counters extends Component {

  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
    ]
  };

  handleDelete = counterId  => {
    console.log( "I am delete" )
    // const counters = this.state.counters.filter( counter => counter.id != counterId )
    // this.setState( { counters } )
  };

  render(){
    return (
      <div>
        <div class="row mb-6">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>

      </div>
    );
  }

}

export default Counters;
