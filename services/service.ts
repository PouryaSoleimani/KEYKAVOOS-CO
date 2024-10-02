import axios from "axios";
let TOKEN = JSON.parse(sessionStorage.getItem('token') as string);
console.log("%c TOKEN TOKEN ===>", "color : yellow", TOKEN);


const app = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  // withCredentials: true,
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}`, },
});
export default app;
