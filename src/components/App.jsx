import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { imagesApi } from 'api/imagesApi';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    inputSearch: '',
    images: [],
    loading: false,
    pages: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputSearch, pages } = this.state;

    if (prevState.inputSearch !== inputSearch || prevState.pages !== pages) {
      this.setState({ loading: true });
      imagesApi(inputSearch, pages)
        .then(({ hits }) => {
          if (hits.length === 0) {
            return toast.error(
              `Don't found name ${inputSearch} , enter something else please!`
            );
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  formSubmitHandler = ({ inputSearch }) => {
    this.setState({
      inputSearch,
    });
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({ pages: prevState.pages + 1 }));
  };

  render() {
    const { loading, images } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {!loading && images.length > 0 && (
          <Button onLoadMore={this.onLoadMoreButton} />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
