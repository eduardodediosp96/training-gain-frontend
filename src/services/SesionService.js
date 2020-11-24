import { HTTP } from '../services/Api'
const config = {
    headers: {
        Authorization: "Bearer 3241789237418923741239847",
    }
}
export default {
    getSesions() {
        console.log("pasa por aca")
        return HTTP.get('/sessions', config)

    }
}