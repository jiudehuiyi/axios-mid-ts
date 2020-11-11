import AxiosRequestConfig from "./types/axiosRequestConfig";
import xhr from "./xhr";
function axios(config : AxiosRequestConfig){
    xhr(config);
}

export default axios;


