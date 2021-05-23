import axios from 'axios';

export class Users {
  static async all() {
    const url = 'https://api.npoint.io/b8cdd8970e0d9028063a';
    const {data} = await axios.get(url);
    return data;
  }
  static async findOneByEmail(email) {
    const url = `/users?email=${email}`;
    const {data} = await axios.get(url);
    return data;
  }
}
