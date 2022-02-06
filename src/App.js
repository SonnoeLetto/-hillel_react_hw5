import { Component } from 'react';
import './App.css';
import { File } from './components/File';
class App extends Component {
  state = {
    peopleID: 1
  }
  render() {
    const {peopleID} = this.state
    return (
    <div className="App">
      <File peopleID={peopleID}/>
      <button onClick={() => this.setState({ peopleID: 1 })}>page 1</button>
      <button onClick={() => this.setState({ peopleID: 2 })}>page 2</button>
      <button onClick={() => this.setState({ peopleID: 3 })}>page 3</button>
    </div>
    )
  }

}

export default App;
