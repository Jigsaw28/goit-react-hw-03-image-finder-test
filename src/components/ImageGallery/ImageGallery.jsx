import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, showModal }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} showModal={showModal} />
        ))}
      </ul>
    </>
  );
};
