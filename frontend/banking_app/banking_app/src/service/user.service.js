import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL + "/api/auth"

class userService {
    register(user) {
        return axios.post(API_URL + "/register", user);
    }

    registerEmp(user) {
        return axios.post(API_URL + "/registerEmp", user);
    }

    login(user) {
        return axios.post(API_URL + "/login", user);
    }

    checkEmailAndMob(email, mob) {
        return axios.get(API_URL + "/forgotPassword/" + email + "/" + mob);
    }
    resetPassword(user) {
        return axios.post(API_URL + "/updatePassword/", user);
    }
    getAllEmp() {
        return axios.get(API_URL + "/getAllEmp");
    }

    createNetBanking(netbanking) {
        return axios.post(API_URL + "/createNetbanking", netbanking);
    }

    getAllTrans() {
        return axios.get(API_URL + "/getAllTrans", { headers: AuthHeader() })
    }

    sendMoney(s)
    {
        return axios.post(API_URL + "/sendMoney", s,{ headers: AuthHeader() });
    }

    changePassword(psw)
    {
        return axios.post(API_URL + "/changePassword", psw,{ headers: AuthHeader() });
    }

}

export default new userService();