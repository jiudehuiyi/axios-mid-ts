//一个最基础的xhr
import AxiosRequestConfig from "./types/axiosRequestConfig"; 

function Xhr(config:AxiosRequestConfig){

    const { method = "get",url,data=null,...rest } = config;

    const xhr = new XMLHttpRequest();

    xhr.open( method.toUpperCase(),url,true );

    xhr.send( data );
};

export default Xhr;
