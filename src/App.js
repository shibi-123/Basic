import React,{Component} from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import './App.css';
import Cart from './Cart';

const items = [
  {id: 1, name: 'Taco Seasoning', price:2.25, qty:2},
  {id: 2, name: 'Pinto Beans', price:1.99, qty:3},
  {id: 3, name: 'Sour Cream', price:3.25, qty:1}
]


function App(){
 
  return (
    <div>
      <Cart items={items} />
      <Counter step={5}  />
      <Counter/>
      <MoodToggler/>
      <Navbar />
      <Greeter name="karen" age= "89" excitement={8}  />
      <Greeter name="babyn" excitement={4}  />
        <h1>the react app</h1>
        
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = (newName) => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     this.setState( {
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     } )
//   }

//   nameChangedHandler = (event) => {
//     this.setState( {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: 'Stephanie', age: 26 }
//       ]
//     } )
//   }

//   render () {
//     const style = {
//       Color: 'white',
//       font: 'inherit',
//       backgroundColor:"yellow",
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };
//         return (
//           <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button 
//              style = {style}
//             onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
//             <Person 
//               name={this.state.persons[0].name} 
//               age={this.state.persons[0].age} />
//             <Person 
//               name={this.state.persons[1].name} 
//               age={this.state.persons[1].age}
//               click={this.switchNameHandler.bind(this, 'lovely')}
//               changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
//             <Person 
//               name={this.state.persons[2].name} 
//               age={this.state.persons[2].age} />
//           </div>
//         );
    
//   }
// }

// export default App


// import React, { Component } from "react";
// import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// class App extends React.Component{
//   state = {
//     username: 'Supermax'
//   }
//   usernameChangedHandler = (event) => {
//     this.setState({username: event.target.value});
//   }
//   render(){
//     return(
//       <>
//       <UserInput 
//           changed={this.usernameChangedHandler} 
//           currentName={this.state.username} />
//       <UserOutput name={this.state.username}/>
//       <UserOutput userName="Max" />
//       </>
//     )
//   }
// }

// export default App
