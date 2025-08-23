import axios from "axios";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
});

api.interceptors.request.use((config) => {
  const user = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const accessToken = user ? user.accessToken : null;

  // Log để debug
  console.log("🔍 API Request Config:", {
    url: config.url,
    method: config.method,
    hasUser: !!user,
    hasToken: !!accessToken,
    token: accessToken ? `${accessToken.substring(0, 20)}...` : "No token",
  });

  return {
    ...config,
    headers: {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MyIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc2ODY5NDQwMDAwMCIsIm5iZiI6MTc0MTg4ODgwMCwiZXhwIjoxNzY4ODQ1NjAwfQ.rosAjjMuXSBmnsEQ7BQi1qmo6eVOf1g8zhTZZg6WSx4",
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      ...config.headers, // Giữ lại headers khác nếu có
    },
  };
});

export default api;
