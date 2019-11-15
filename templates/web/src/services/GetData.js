import axios from 'axios';
export function GetSearch(keyword) {
    console.log('http://0.0.0.0:5000/areas/' + keyword);
    return axios.get('http://0.0.0.0:5000/areas/' + keyword);}

export function GetSuggestList(keyword) {
    console.log('http://0.0.0.0:5000/areas');
    return axios.get('http://0.0.0.0:5000/areas');}

export function GetDetail(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/' + keyword);
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/' + keyword);}
    
export function GetInsta(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/' + keyword);
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/' + keyword);}
        