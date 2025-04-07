export const onLoadMoreScroll = (pages) => {
  if (pages > 1) {
    const btnLoadMore = document.querySelector('.Button');
    btnLoadMore?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
