export const Button = ({onLoadMore}) => {
  return (
    <button type="button" onClick={onLoadMore} className="Button">
      Load More
    </button>
  );
};
