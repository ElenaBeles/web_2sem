import {MainStore} from "./MainStore";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {UserModel} from "../models/UserModel";

export class UsersStore {

    constructor(public mainStore: MainStore) {
        makeAutoObservable(this)
    }


    register = (user: UserModel) => {
        const data = {
            login: user.username,
            password: user.password,
            email: user.email,
            phone_number: user.phone_number
        }
        axios.post('https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/account', data)
            .then((res: any) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    login = (user: UserModel) => {
        const data = {
            login: user.login,
            password: user.password
        }

        axios.post('https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login', data)
            .then((res: any) => {
                const {token, ...data} = res;
                window.localStorage.setItem("token", res.token)
                window.localStorage.setItem("user", JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    profile = (token: String) => {
        axios.get('profile')
            .then((res: any) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}