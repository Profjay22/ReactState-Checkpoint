
import './App.css';
import React , {Component} from "react"

class App extends Component {
  constructor(){
    super()

    this.state ={
       Fullname: "Akintomide Jeremiah",
       Bio: "A fullstack student at GOMYCODE",
       Profession: "Full stack developer",
       imageSrc : require("./Image/Jeremiah.jpg"),
       shows : false,
       count: 0
    }
   
      
    
    this.showBio = this.showBio.bind(this)
  }

  componentDidMount() {
     setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }
  
  showBio({componentDidMount}){
      
    this.setState({
      shows: !this.state.shows,
      counts: this.state.count
    })
  }

  render(){
    return(
      <div className='App'>
      
        <button onClick={this.showBio}>Show Profile</button>
        {(this.state.shows) ? <div>
          <h1>{this.state.Fullname}</h1>
          <img src= {this.state.imageSrc} alt="Jerry"/>
          <h3>{this.state.Profession}</h3>
          <h3>{this.state.Bio}</h3>
          <h1>The component has been rendered for {this.state.counts} seconds</h1>
          </div> : ''}
      </div>
    )
  }

}

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

export default App;
