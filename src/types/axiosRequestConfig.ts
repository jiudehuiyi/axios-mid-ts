
type Method =  
        "get" | "GET" |
        "post" | "POST" |
        "put" | "PUT" |
        "delete" | " DELETE" |
        "head" | "HEAD" | 
        "option" | "OPTION" | 
        "patch" | "PATCH" ;
interface TransformRequest {
    <T,U>(data:T,headers:U):T;
}
interface TransformResponse {
    <T>(data:T):T;
}
interface Proxy {
    host:string;
    port:number;
    auth:any;
}


export default interface  AxiosRequestConfig{
    url : string;   
    method ?: Method ;
    baseURL ?: string;
    transformRequest?:Array<TransformRequest>;
    transformResponse?:Array<TransformResponse>;
    headers?:any;
    params?:any;
    paramsSerializer?:(params:any)=>string;
    data?:any;
    timeout?:number;
    withCredentials?:boolean;
    adapter?:(config:any)=>void;
    auth?:any;
    responseType?:string;
    responseEncoding?:string;
    xsrfCookieName?:string;
    xsrfHeaderName?:string;
    onUploadProgress?:(progressEvent:any)=>void;
    onDownloadProgress?:(progressEvent:any)=>void;
    maxContentLength?:number;
    maxBodyLength?:number;
    validateStatus?:(status:number)=>boolean;
    maxRedirects?:number;
    socketPath?:string | null;
    proxy?:Proxy;
    cancelToken:any;
    decompress:boolean;
}
