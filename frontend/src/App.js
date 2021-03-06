import React from 'react';
import { use100vh } from 'react-div-100vh';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from './assets/logo.png';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import HomePageContainer from './containers/HomePageContainer';

const App = () => {
  const height = use100vh();
  return <Router basename={process.env.PUBLIC_URL}>
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
        <Menu.Item header as={Link} to='/'>
          <Image size='mini' src={logo} />
          <span style={{ marginLeft: '1em' }}>Lost in Translation</span>
        </Menu.Item>
        <Menu.Item position='right' as={Link} to='about'>What is This?</Menu.Item>
      </Container>
    </Menu>
    <Container style={{ paddingTop: '6em', paddingBottom: '1em', display: 'flex', flexDirection: 'column', height }}>
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
