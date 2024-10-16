import axios from "axios";

if (typeof window !== "undefined") {
  let SessionToken = window.sessionStorage.getItem('token')
  const TOKEN = JSON.parse(SessionToken as string);
  console.log("%c TOKEN TOKEN ===>", "color : yellow", TOKEN);
}


const app = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}`, },
});
export default app;
