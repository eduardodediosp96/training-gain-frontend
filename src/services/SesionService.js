import { HTTP } from '../services/Api'

export default {
    getSesions(Authorization) {
        const config = {
            headers: {
                Authorization: "Bearer " + Authorization,
            }
        }
        return HTTP.get('/sessions', config)
    },

    postSesions(Authorization, dto) {
        const config = {
            headers: {
                Authorization: "Bearer " + Authorization,
            }
        }
        return HTTP.post('/sessions', dto, config)
    }
}