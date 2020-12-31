import axios from 'axios'

// import FormData from "form-data";

axios.defaults.baseURL = 'http://ec2-18-220-147-45.us-east-2.compute.amazonaws.com:8000/'
// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.common['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';
// axios.defaults.headers.common['Authorization'] = 'Token 1c10a1a9d7d8973d860aac56c07a8fd588fb0527';

// let userId=2
// let USER_NAME='sagar'

//SAMPLE USE CASE
// const request = api.getArticle(match.params.id)

// request
//     .then(res => {
//         this.setState({
//             post: res.data.results
//         })
//     }).catch(err => toast.error(err.response.data.error))

// axios.interceptors.request.use(config => {
//   if (localStorage.getItem('access-token'))
//     config.headers['access-token'] = localStorage.getItem('access-token')
//   config.headers['Content-Type'] = 'application/json;charset=UTF-8';
//   return config

//***********************************/

// # Task endpoints

//     path('task/create_task', views.createTask),
//     path('task/<int:task_id>', views.task),
//     path('task/get_nearby_tasks', views.getNearByTasks),

//***********************************/