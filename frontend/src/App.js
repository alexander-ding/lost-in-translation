import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from './assets/logo.png';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import HomePageContainer from './containers/HomePageContainer';

const App = () => {
  return <Router>
    <Menu
      borderless
      fixed='top'
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container>
        <Menu.Item header as='a' href='/'>
          <Image size='mini' src={logo} />
          <span style={{ marginLeft: '1em' }}>Cycle Translator</span>
        </Menu.Item>
        <Menu.Item position='right' as='a' href='about'>What is This?</Menu.Item>
      </Container>
    </Menu>
    <Container style={{ paddingTop: '6em', paddingBottom: '1em', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Switch>
        <Route path='/' exact>
          <HomePageContainer />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
    </Container>
  </Router>;
}

export default App;
