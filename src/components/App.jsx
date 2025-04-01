import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { imagesApi } from 'api/imagesApi';

export class App extends Component {
 
  formSubmitHandler = ({ inputSearch }) => {
    this.setState({
      inputSearch,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      imagesApi(this.state, 1)
    }
  }

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}
