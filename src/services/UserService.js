import { HTTP } from '../services/Api'
export default {
    getUsers(Authorization) {
        const config = {
            headers: {
                Authorization: "Bearer " + Authorization,
            }
        }
        return HTTP.get('/users', config)

    },
    getUser(id, Authorization) {
        const config = {
            headers: {
                Authorization: "Bearer " + Authorization,
            }
        }
        return HTTP.get('/users' + '/' + id, config)

    }
}