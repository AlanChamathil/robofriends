import React from 'react';
import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}));
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filterRobot = robots.filter( robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if(!robots.length){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1>Robot Friends</h1>
                    <SearchBox SearchChange={this.onSearchChange}/>
                    <ErrorBoundry>
                        <CardList robots={filterRobot}/>
                    </ErrorBoundry>
                </div>
            );
        }

    }
}

export default App;