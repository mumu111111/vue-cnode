import axios from 'axios'

axios.defaults.baseURL = "https://cnodejs.org/api/v1";
axios.defaults.headers.post['Content-type'] = "application/json"
// axios.defaults.withCredentials= true; //form-data形式


export default function request({ method = "GET", url, data={} }){
    return new Promise((resolve, reject)=>{
        let option = { method, url };
        if(method.toLowerCase() === 'get'){
            option.params = data;
        }else{
            option.data = data;
        }
        axios(option).then(res =>{
            if(res.status === 200){
                resolve(res.data);
            }else{
                reject(res.data);
            }
        }).catch(err=>{
            reject(err);
        })
    })
}