import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { imagesApi } from 'api/imagesApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    pages: 1,
  };

  formSubmitHandler = ({ inputSearch}) => {
    this.setState({
      inputSearch,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputSearch !== this.state.inputSearch) {
      imagesApi(this.state, this.state.page).then(data => {
        this.setState({
          images: [...data.hits],
        }) 
      });
    } 
  }

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={this.state.images} />
        <Button />
      </Container>
    );
  }
}
