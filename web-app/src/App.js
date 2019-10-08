import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import LocationSearch from './LocationSearch';

function App() {
  return (
    <Container className="App-Container" fluid textAlign="center">
      <Header as="h1" textAlign="center">
        Franchisee Location Search
      </Header>
      <LocationSearch />
    </Container>
  );
}

export default App;
