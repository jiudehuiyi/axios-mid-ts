import axios from "../../src/index";
import {buildURL} from "../../src/helpers/url"
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
console.log( buildURL('/simple/get',{
  a: 1,
  b: 2
}) )




