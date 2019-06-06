import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import socketIOClient from "socket.io-client";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lobby: false,
            login: true

        }
    }



render() {
    return(
        
        <div>
            {this.state.lobby ?  <p>If true</p> : <div></div>}

            <div>
            {this.state.login ? <Login/> : <div> HELLO YOU NEED TO LOGIN </div>}
            </div>
        </div>

       
    )
}


}

export default App;