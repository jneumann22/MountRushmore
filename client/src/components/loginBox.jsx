import React from 'react';
import ReactDOM from 'react-dom';


class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.submitLogin = this.submitLogin.bind(this)
    }



render() {
    return (
    <div className="inner-container">
    <div className="box">
    
    <div className="input-group">
    <label htmlFor="username">Username</label>
    <input type= "text" name = "username" className='login-input' placeholder = "Username" />
    </div>
    

    <div className="input-group">
    <label htmlFor="password">Password</label>
    <input type= "password" name = "password" className='login-input' placeholder = "Password" />
    </div>



    <button type='button' className="login-btn"  onClick = {this.submitLogin}>Login</button>
    
    </div>
    
    
    </div>
    )
}


}

export default LoginBox;