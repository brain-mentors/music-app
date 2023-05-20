// BackEnd API Call
import { URLS } from "../config/constants.js";
export const apiClient = {
    get(url){
        const promise = fetch(url);
        return promise;
    },
    post(){

    }
}