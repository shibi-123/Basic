import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
        // globally describing the url for the use of the axios requests folder

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'

let myInterceptor = axios.interceptors.request.use(request => {
    console.log(request); //edit request config
    return request;
}, error => {
        console.log(error);
        return Promise.reject(error)
});

let myInterceptors = axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
        console.log(error);
        return Promise.reject(error)
})

axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
