// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
import React from 'react';
import Modal from './Modal'

const App = () => {
    const modalProps = {
        triggerText: 'This is a button to trigger the Modal'
    };

    return (
        <main className="content">
            <p>Lorem ipsum paragraph...</p>
            <p>Lorem ipsum paragraph...</p>
            <p>Lorem ipsum paragraph...</p>

            <Modal {...modalProps}/>
        </main>
    );
}
export default App;


