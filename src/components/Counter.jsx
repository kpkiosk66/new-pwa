import React , { Component } from 'react';
import "../App.css";
import troll from "../image/troll.jpg";
class Counter extends Component {

  state = {
    value: 5,
    tags: ["tag1","tag2","tag3", "tag4", "tag5", "tag6"]
  };

  // constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind( this );
  //}

  handleIncrement = () => {
    console.log("I am handleIncrement")
    this.setState( { value: this.state.value + 1} )
    //this.setState( { tags: this.state.tags.concat("tag" + this.state.count)} )
    // console.log(  this.state.tags )
  };


      render(){
    // console.log('props', this.props )
    return (
      <div class="col-md-6" >
      <div class="" onClick={() => alert("Hello from here")}>
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-lg-block">
                  <img style = { {width: 200, height: 200} } src={require('../image/troll.jpg')} />
              </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">World</strong>
              <h3 class="mb-0">Featured post</h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="stretched-link">Continue reading</a>
            </div>
          </div>
      </div>
  </div>
    );
  }

  renderTags(){
    //{this.state.tags.length === 0 && "Please create a new tag!"}
    if( this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{ this.state.tags.map( tag => <li key = { tag }>{ tag }</li>)} </ul>;
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0  ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { value } = this.state;
    return value == 0 ? 'Zero' : value;
  }
}

export default Counter;
