//工具方法

const utill_toString  = Object.prototype.toString;
//判断值是否为日期
export function isDate( val : any ){
    return utill_toString.call( val ) === "[object Date]";
}
//判断是否为对象
export function isObject( val:any ){
    return utill_toString.call( val ) === "[Object Object]";
    //或者
    // return val !== null && typeof val === "object"
}





