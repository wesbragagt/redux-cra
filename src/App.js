import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './components/action/SimpleAction';

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

class App extends React.Component {
    simpleAction = event => {
        this.props.simpleAction();
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <pre>{JSON.stringify(this.props)}</pre>
                <button onClick={this.simpleAction}>Test Redux</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
