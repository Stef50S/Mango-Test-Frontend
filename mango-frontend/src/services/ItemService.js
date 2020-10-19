import axios from 'axios';

const USERNAME = 'user';
const ITEM_API_URL = "http://localhost:8181/api";
const USER_ITEM_API_URL = `${ITEM_API_URL}/${USERNAME}/items`;

class ItemService {

  getItems() {
    return axios.get(USER_ITEM_API_URL);
  }

  createItem(item) {
    return axios.post(USER_ITEM_API_URL, item);
  }

}

export default new ItemService()