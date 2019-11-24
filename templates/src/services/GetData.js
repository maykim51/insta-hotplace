import axios from 'axios';
export function GetSearch(keyword) {
    console.log('http://52.79.172.38/areas/' + keyword);
    return axios.get('http://52.79.172.38/areas/'+ keyword);}

export function GetSuggestList(keyword) {
    console.log('http://52.79.172.38/areas');
    return axios.get('http://52.79.172.38/areas');}        