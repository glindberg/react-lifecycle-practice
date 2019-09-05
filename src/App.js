import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// class MyComponent extends React.Component {

// // Constructs the component before render.
//   constructor(props) {
//   super(props)
//   this.state = {
//     name: "Pelle"
//   }
// }

// class Welcome extends React.Component {
//   // Constructs the component before render.
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Pelle'
//     };
//   }
//   render() {
//     return <h1>Hello, {this.name}</h1>;
//   }
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
