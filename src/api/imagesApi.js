import axios from 'axios';

const API_KEY = '35061241-cc64e28d246336ea3caedb193';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const imagesApi = async (text, page) => {
  try {
    const response = await axios.get(
      `?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const images = await response.data;
    return images;
  } catch (error) {
    console.log(error);
  }
};
