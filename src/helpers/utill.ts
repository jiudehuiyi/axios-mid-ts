//工具方法

const utill_toString  = Object.prototype.toString;
//判断值是否为日期
export function isDate( val : any ){
    return utill_toString.call( val ) === "[object Date]";
}
//判断是否为对象
export function isObject( val:any ){
    //这种方法返回的是各种对象，例如array，date，Regexp等
    return val !== null && typeof val === "object";
}
//判断是否为普通对象({})
export function isPlainObject( val:any ):boolean{
    return utill_toString.call(val) === "[object Object]";
}





