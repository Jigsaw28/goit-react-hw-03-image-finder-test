import { imagesApi } from 'api/imagesApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { GalleryContainer } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    pages: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ loading: true });
      setTimeout(() => {
        imagesApi(this.props.search, this.state.page)
          .then(data => {
            this.setState({
              images: [...data.hits],
            });
          })
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { loading, images } = this.state;
    return (
      <GalleryContainer>
        {loading ? (
          <Loader />
        ) : (
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem image={image} key={image.id} />
            ))}
          </ul>
        )}
      </GalleryContainer>
    );
  }
}
