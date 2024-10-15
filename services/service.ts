import axios from "axios";
const SessionToken = sessionStorage.getItem('token') as string
let TOKEN = JSON.parse(SessionToken);
console.log("%c TOKEN TOKEN ===>", "color : yellow", TOKEN);




const app = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}`, },
});
export default app;
