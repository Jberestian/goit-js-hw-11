import axios from 'axios';

export class PixibuyApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '7985885-d9ba141b4ce017599a5dbc073';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    return axios.get(`${this.#BASE_URL}`, {
      baseURL: this.#BASE_URL,
      params: {
        key: this.#API_KEY,
        q: this.searchQuery,
        page: this.page,
        per_page: 40,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
