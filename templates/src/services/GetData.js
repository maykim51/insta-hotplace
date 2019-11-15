import axios from 'axios';
export function GetSearch(keyword) {
    console.log('http://52.79.172.38:5000/areas/' + keyword);
    return axios.get('http://52.79.172.38:5000/areas/' + keyword);}

export function GetSuggestList(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/scc-hotplace/area_list');
    return axios.get('https://my-json-server.typicode.com/dudusae/scc-hotplace/area_list');}

export function GetDetail(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/' + keyword);
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/' + keyword);}
    
export function GetInsta(keyword) {
    console.log('https://my-json-server.typicode.com/maykim51/insta-hotplace/' + keyword);
    return axios.get('https://my-json-server.typicode.com/maykim51/insta-hotplace/' + keyword);}
        