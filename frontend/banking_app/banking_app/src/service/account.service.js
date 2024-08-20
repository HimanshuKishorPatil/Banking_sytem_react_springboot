import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL + "/api/acc"

class accountService {

    accountSatusUpdate(id, st) {
        return axios.get(API_URL + "/statusUpdate/" + id + "?st=" + st);
    }

    getAllPendingAccount() {
        return axios.get(API_URL + "/getAllPendigAccount");
    }

    getAllApproveAccount() {
        return axios.get(API_URL + "/getAllApproveAccount");
    }

    getAccountDetails(accno) {
        return axios.get(API_URL + "/getAccountDetils?accno=" + accno);
    }

    doTransactionByAdmin(trans) {
        return axios.post(API_URL + "/doTransactionByAdmin", trans);
    }

    getTransaction(accno) {
        return axios.get(API_URL + "/getTransaction?accno=" + accno);
    }
    getAccountById(id) {
        return axios.get(API_URL + "/getAccountById/" + id);
    }
    updateAccount(user) {
        return axios.post(API_URL + "/updateAccount", user);
    }
}

export default new accountService();