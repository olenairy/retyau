import * as React from 'react';

import {Link} from 'react-router-dom'


export default class Home extends React.Component<any, any>{
    public render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div >
                <h1>Home</h1>
                {isAuthenticated() ?
                <Link to="/profile">Profile</Link>
                :
                <button onClick={login}>Login</button>
                }
            </div>
        );
    }
}
