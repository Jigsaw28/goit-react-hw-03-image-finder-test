import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    inputSearch: '',
  };

  formSubmitHandler = ({ inputSearch }) => {
    this.setState({
      inputSearch,
    });
  };

  render() {
    const { inputSearch} = this.state
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery search={this.state.inputSearch} />
        {inputSearch && <Button />}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
