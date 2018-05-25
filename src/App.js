import React, {Component} from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/main'
import './App.css';
import Main from './containers/Main'

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">ClauseMatch Editor</h1>
                    </header>
                    <Main/>
                </div>
            </Provider>
        );
    }
}

export default App;
