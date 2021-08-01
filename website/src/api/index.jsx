
import ajax from './ajax'

const BASE = 'http://www.lipy.site:6868'

export const reqPosts = () => ajax(BASE + "/api/posts/");
