import React, {Component} from 'react';

import { CardList } from './Component/card-list/card-list.component';
import { SearchBox } from './/Component/search-box/serach-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monstars: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monstars: user }));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render(){

    const { monstars, searchField } = this.state;
    const filteredMonstar = monstars.filter( monstar => monstar.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder = { 'search monstar' }
          handleChange = { this.handleChange }
        />
        <CardList monstars = {filteredMonstar}/>   
      </div>
    );
  }
}

export default App;
