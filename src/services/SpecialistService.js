import { HTTP } from '../services/Api'
const config = {
    headers: {
        Authorization: "Bearer 3241789237418923741239847",
    }
}
export default {
    getSpecialist() {
        return HTTP.get('/specialists', config)
    },
    postSpecialist(dataReq) {
        console.log("ENVIA ESTO:", dataReq)
        return HTTP.post('/specialists', dataReq, config)

    }
}