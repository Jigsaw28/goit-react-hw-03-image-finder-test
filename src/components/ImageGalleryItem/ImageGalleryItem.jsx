export const ImageGalleryItem = ({ image, showModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => showModal(image.largeImageURL)}
      />
    </li>
  );
};
  