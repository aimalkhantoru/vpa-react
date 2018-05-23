import decode from 'jwt-decode';
import axios from 'axios'

export default class AuthService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl || 'http://172.19.44.41:3000';
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login(credential) {
        return axios.post(`${this.apiUrl}/users/login1`, credential)
                .then((res) => {
                    console.log(res.data.result);
                    this.setToken(res.data.result.token)
                    return Promise.resolve(res);
                })
    }

    isLoggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token){
        try {
            const decoded = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            }
            else {
                return false;
            }
        }
        catch(error)  {
            return false;
        }
    }

    setToken(token) {
        localStorage.setItem('id_token', token);
    }

    getToken() {
        localStorage.getItem('id_token');
    }
    logout() {
        localStorage.removeItem('id_token');
    }
    getProfile() {
        return decode(this.getToken());
    }
    httpGetRequest(url, option) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if(this.isLoggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        
    }
}