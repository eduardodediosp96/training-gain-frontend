import { HTTP } from '../services/Api'
const config = {
    headers: {
        Authorization: "Bearer 3241789237418923741239847",
    }
}
export default {
    getLogin(dataReq) {
        console.log("ENVIA ESTO:", dataReq)
        return HTTP.post('/users/authenticate', dataReq, config)

    }
}