import React, { Component } from 'react';
import logo from '../public/assets/logo.svg';
import TodoContainer from './components/TodoContainer';

class App extends Component {
    state = { users: [] };

    componentDidMount() {
        fetch('/users/5c0bfee51766c4405dc77a04/todos', {
            headers: { accept: 'json' }
        })
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ users });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log('state-->', this.state);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload. ,,,,
                </p>
                <TodoContainer />
            </div>
        );
    }
}

export default App;
