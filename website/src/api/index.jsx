
import ajax from './ajax'
const BASE = 'http://www.lipy.site'
export const reqPosts = () => ajax(BASE + "/api/posts/");
