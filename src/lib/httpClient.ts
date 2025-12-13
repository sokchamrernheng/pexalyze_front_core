import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  withCredentials: true, // if using cookies / auth
});

// axios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     if (error.response?.status === 401) {
//       // later: refresh token logic here

//       queryClient.removeQueries({ queryKey: ["auth"] });
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
// queryClient.setQueryData(['auth', 'me'], user)
// queryClient.removeQueries({ queryKey: ['auth'] })
