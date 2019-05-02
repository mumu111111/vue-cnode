import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default function request(url) {
    return new Promise((resolve, reject) => {
        let option = { method: 'GET', url }
        axios(option).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(error)
            }
        }).catch(err => {
            reject(err)
        })
    })
}