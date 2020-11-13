//处理请求头headers
import { isPlainObject } from "./utill";


//将转换header的key大小写问题
function normalizeHeaderName( headers:any,normalizeName:string ):void{

    if( !headers ) {
        return ;
    }
    Object.keys(headers).forEach( (name)=>{

        if( name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase() ) {
            headers[normalizeName] = headers[name];
            delete headers[name];
        }

    } );

}


export function processHeaders(headers:any,data:any):any{

    if( !headers ) {
        return ;
    }
    normalizeHeaderName( headers,"Content-Type" );

    //处理content-type
    if( isPlainObject(data) ){
        if( !headers["Content-Type"]  ){
            headers["Content-Type"] = "application/json;utf-8"
        }
    }
    return headers;
}

