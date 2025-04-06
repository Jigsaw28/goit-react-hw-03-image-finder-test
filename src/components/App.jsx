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
    const prevSearch = prevState.inputSearch;
    const nextSearch = this.state.inputSearch;

    if (prevSearch !== nextSearch) {
      this.setState({ loading: true });
      setTimeout(
        () =>
          imagesApi(nextSearch, this.state.page)
            .then(({ hits }) => {
              if (hits.length === 0) {
                return toast.error(
                  `Don't found name ${nextSearch} , enter something else please!`
                );
              }
              this.setState({
                images: [...hits],
              });
            })
            .catch(error => console.log(error))
            .finally(() => this.setState({ loading: false })),
        2000
      );
    }
  }

  formSubmitHandler = ({ inputSearch }) => {
    this.setState({
      inputSearch,
    });
  };

  render() {
    const { loading, images } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmitHandler} />
        {loading ? <Loader /> : <ImageGallery images={images} />}
        {!loading && images.length > 0 && <Button />}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
