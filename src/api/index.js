import axios from "axios";
// import { saveAs } from 'file-saver';

const API = axios.create({ baseURL: "http://localhost:4000" });
// const API = axios.create({baseURL:'https://wazodeal.herokuapp.com'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const userSignIn = (ref) => API.get(`/auth/twitter`, {ref});
export const userSignInAccess = (oauth_verifier, oauth_token, ref) => API.post(`/callback`, {oauth_verifier, oauth_token, ref});
export const verifyTaskTweet = (userId, tweetId) => API.post(`/tweet`, {userId, tweetId});
export const verifyTaskOne = (userId) => API.post(`/task/one`, {userId});
export const verifyTaskTwo = (userId, tweetId) => API.post(`/like/one`, {userId, tweetId});
export const verifyTaskThree = (userId, tweetId) => API.post(`/rt/one`, {userId, tweetId});
export const verifyTaskFour = (userId, tweetId) => API.post(`/quote/one`, {userId, tweetId});
export const verifyReferrer = (userId, referrer) => API.post(`/referrer`, {userId, referrer});
