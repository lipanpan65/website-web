
import axios from "axios";
import { message } from "antd";

export default function ajax(url, data = {}, type = "GET") {
    let promise;
    return new Promise((resolve, reject) => {
        // 1. 执行异步请求
        if (type === "GET") {
            // 发送GET请求
            promise = axios.get(url, {
                params: data,
            });
        } else if (type === "PUT") {
            // 发送PUT请求
            promise = axios.put(url, data);
        } else if (type === "DELETE") {
            promise = axios.delete(url, data);
        } else {
            //发送post请求
            promise = axios.post(url, data);
        }
        // 2. 如果成功了,调用resolve(value)
        promise
            .then((response) => {
                // resolve(response)
                resolve(response.data); // 直接获取到data对象
                // 3. 如果失败了,不调用reject(reason),提示异常信息
            })
            .catch((error) => {
                // reject(error)
                message.error("请求出错了" + error.msg);
            });
    });
}