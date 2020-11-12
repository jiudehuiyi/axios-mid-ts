import AxiosRequestConfig from "./types/axiosRequestConfig";
import { buildURL } from "./helpers/url";
import { transformRequest } from "./helpers/data";
import xhr from "./xhr";
function axios(config : AxiosRequestConfig):void{

    processConfig( config );

    xhr(config);
}

function processConfig( config:AxiosRequestConfig ):void{
    config.url = transformURL( config );
    config.data = transformData( config );
}

function transformURL( config:AxiosRequestConfig ):string{
    const {url,params} = config;
    return buildURL(url,params);
};
function transformData(config:AxiosRequestConfig):any {

    const { data } = config;
    if( data ) {
        return transformRequest(data);
    }
    return "";

}
export default axios;


