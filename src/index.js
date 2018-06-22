//console.info(111)
import login from './login/init'
import './api/FetchMock.js'
let container = document.getElementById("container");

login({container:container});