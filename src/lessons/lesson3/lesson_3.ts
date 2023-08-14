import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

const getFakeAPI = () => {
    return axiosInstance.get('posts/1')
        .then(res => console.log(res.data))
}

getFakeAPI()

const postFakeAPI = () => {
    return axiosInstance.post('posts', {title: 'NEW FAKE POST', userId: 1, body: 'fdgdfgdfgdf'})
        .then(res => console.log(res.data))
}
postFakeAPI()

const putFakeAPI = () => {
    return axiosInstance.put('posts/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
        .then(res => console.log(res.data))
}

putFakeAPI()

const deleteFakeAPI = () => {
    return axiosInstance.delete('posts/1')
        .then(res => console.log(res.data))
}

deleteFakeAPI()

// just a plug
export default () => {
};