import React, { Component } from 'react';
import Counter from "./Counter";
class App extends Component {
  state = {
    fullName: 'Souad Hamdi',
    bio: 'full stack web developer',
    imgSrc: 'https://www.whaelse.com/wp-content/uploads/2016/09/Blue_Pans_Striped_Shirt-13-600x900.jpg',
    profession: 'Web Developer & QA engineer',
    show: false
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the counter </h1>
        <Counter />
        </>
      </div>
    )
    
  };
}

export default App;