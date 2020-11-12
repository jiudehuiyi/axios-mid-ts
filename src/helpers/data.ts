//将data转化为对象字符串
import {  isPlainObject } from "./utill";

export function transformRequest(data:any):any{

    if( isPlainObject(data) ) {
        return JSON.stringify( data );
    }
    return data;

}


