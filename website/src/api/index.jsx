
import ajax from './ajax'


export const getPosts = (action = 'posts') => ajax(`/api/${action}/`);

export const getPost = (id) => ajax(`/api/posts/${id}/`);

export const createPosts = (title, text) => ajax("/api/posts/", { title, content: text }, 'POST');

export const updatePosts = (pk, title, text) => ajax(`/api/posts/${pk}/`, { title, content: text }, 'PUT');

export const getDraftList = () => ajax("/api/posts/draft");

export const reqArticleDraftDelete = (id) => ajax(`/api/posts/${id}/`, {}, "DELETE");


