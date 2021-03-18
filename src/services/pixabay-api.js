import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const PixabayKey = '19811356-e6efa31c9626364e7cdb6ab36';

const fetchPics = ({
  searchQuery = 'wood',
  currentPage = 1,
  per_page = 12,
}) => {
  return axios
    .get(
      `/?key=${PixabayKey}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => {
      return response.data;
    });
};

export default { fetchPics };
