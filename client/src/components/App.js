import React, { Component } from 'react';
import { token } from '../api';

import LoginPage from './LoginPage';
import Home from './Home';

import styled from 'styled-components/macro';
import { Global } from '../styles';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

class App extends Component {
    state = {
        token: '',
    };

    componentDidMount() {
        this.setState({ token });
    }

    render() {
        const { token } = this.state;

        return (
            <AppContainer>
                <Global />

                {token ? <Home /> : <LoginPage />}
            </AppContainer>
        );
    }
}

export default App;
