//一个最基础的xhr
import AxiosRequestConfig from "./types/axiosRequestConfig"; 

function Xhr(config:AxiosRequestConfig){

    const { method = "get",url,data=null,headers,...rest } = config;

    const xhr = new XMLHttpRequest();

    xhr.open( method.toUpperCase(),url,true );

    //处理header逻辑
    Object.keys(headers).forEach( (name)=>{

        if( data === null && name.toUpperCase() === "CONTENT-TYPE" ){
            delete headers[name];
        }else {
            xhr.setRequestHeader( name,headers[name] );
        }

    } );

    xhr.send( data );
};

export default Xhr;
