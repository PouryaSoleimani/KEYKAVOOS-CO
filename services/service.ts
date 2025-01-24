"use client";
import axios from "axios";

let TOKEN = null;

if (typeof window !== "undefined") {
  const SessionToken = sessionStorage.getItem('token');
  try { TOKEN = JSON.parse(SessionToken as string); }
  catch (error) { console.error("Error parsing token:", error); }
}

console.log("%c TOKEN TOKEN ===>", "color: yellow", TOKEN);

const app = axios.create({
  // baseURL: process.env.API_BASE_URL || "https://back.keykavoos.co/api/v1",
  baseURL: process.env.API_BASE_URL || "https://localhost:8000/api/v1",
  headers: { "Content-Type": "application/json", Authorization: TOKEN ? `Bearer ${TOKEN}` : '', },
});


app.interceptors.response.use(
  response => response,
  error => { console.error("API error:", error); return Promise.reject(error); }
);

export default app;