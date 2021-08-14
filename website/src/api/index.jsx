
import ajax from './ajax'


export const getPosts = () => ajax("/api/posts/");

export const createPosts = (title, text) => ajax("/api/posts/", { title, content: text }, 'POST');

export const updatePosts = (pk, title, text) => ajax(`/api/posts/${pk}/`, { title, content: text }, 'PUT');
