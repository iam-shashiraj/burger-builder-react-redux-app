import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shash-react-app.firebaseio.com/'
});

export default instance;
