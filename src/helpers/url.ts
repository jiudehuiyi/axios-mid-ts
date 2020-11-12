//对url的params做处理，将传递的params加载url上

/*
    1.url需要进行处理，当传入的url不带params参数(url)的时候需要往url加入?,当带pramas参数的时候(url?xx=xxx)的时候需要往后面加入&
    2.当params对象中的value为数组的时候需要这样设置:key[]=value,例如 foo:["bar"] => foo[]=bar
    3.当params对象中的value为对象的时候需要这样设置:key=object,例如 key:{name:"xxx"} => key={name:"xxx"},但是值得注意的是value是需要转码的
    4.当params对象参数日期为对象的时候需要对value使用toISOString进行转换
    5.需要对空值(null,undefined)进行忽略
    6.特殊字符的支持 `@`、`:`、`$`、`,`、` `、`[`、`]`这些特殊字符是在url中希望保留原始值的，不希望被转码的，
    7.丢弃ur中的hash值,
    8.需要保留url中已经存在的参数键值对的
*/


import {
    isDate,isObject
} from "./utill";

//对字符串转码，并且保留相关的原始值
function encode( val : string ):string{

    return encodeURIComponent(val)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']')

}


export function buildURL(url : string, params ?: any) {

    if(!params) {
        //如果params为空直接返回url
        return url;
    }
    //保存键值对的临时数组
    const parts : Array<string>  = [];

    Object.keys( params ).forEach( (key)=>{
        let val = params[key];

        //5
        if( val === null || typeof val === "undefined" ) {
            return ;
        }
        //临存数组
        let values : Array<any>;
        //2,3
        if( Array.isArray(val) ) {
            values = val;
            key += "[]";
        }else {
            values = [val];
        }
        //3,4
        values.forEach( (item)=>{
            //如果是日期    
            if( isDate(item) ){
                item = item.toISOString();
            }else if( isObject(item) ){
                //如果是对象
                item = JSON.stringify( item );
            }
            parts.push( `${encode(key)}=${encode(val)}` );
        } );
    } );

    //将params中的键值对用&连接起来
    const serializedParams = parts.join( "&" );

    if( serializedParams ) {
        //7
        const hashIndex = url.indexOf("#");
        if( hashIndex !== -1 ) {
            url = url.slice(0,hashIndex);
        }
        //8
        url += (url.indexOf("?") === -1 ? "?" : "&" ) + serializedParams;
    }

    return url;
}









