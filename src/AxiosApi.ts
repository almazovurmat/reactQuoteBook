import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://my-js-course-18-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;