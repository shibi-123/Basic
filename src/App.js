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
// import First from './First';

// class App extends React.Component {  
//    render() {  
//       return (  
//          <div>  
//             <First/>  
//             <Second/>  
//          </div>  
//       );  
//    }  
// }  

// class Second extends React.Component {  
//    render() {  
//       return (  
//          <div>  
//             <h2>Hello React</h2>  
//             <p>This websites contains the great CS tutorial.</p>  
//          </div>  
//       );  
//    }  
// }  
// export default App;  


// import React, { Component } from "react";

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { bioData:false};
//     this.togglebioData = this.togglebioData.bind(this);
//   }

//   togglebioData(){  
//     this.setState({bioData: !this.state.bioData});  
//   }  

//   render(){
//         return(
//          <div>
//            <h1>
//              Hello Dogs
//            </h1>
//            {this.state.bioData?(
//              <div>
//                <p><h4>I LOVE puppiess</h4></p>
//                <button onClick={this.togglebioData}>Show Less</button>
//              </div>
//            ):(
//             <div>  
//             <button onClick={this.togglebioData}> Read More </button>  
//           </div>  
//            )}
//          </div>
//         )
//   }
// }

// export default App;


// import React, { Component } from "react";
// import List from "./Details";

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//      details:[
//        {
//         name:"shivangi keshri",
//         class:10
//        },{
//          name:"cole Sprouse",
//          class:11
//        },{
//          name:"JungKook park",
//          class:11
//        }
//      ]
//     }

//   }



//   render(){
//     return(
//       <div>
//         <h1>Dairy Details</h1>
//           <ul><li>{this.state.details.map(items => <List jsc={items} />  )}</li></ul>
//       </div>
//     )
//   }

// }


// export default App;
