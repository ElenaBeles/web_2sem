import {MainStore} from "./MainStore";
import {makeAutoObservable} from "mobx";

export class ModalStore {
    currentModal = null;
    constructor(public mainStore: MainStore) {
        this.currentModal = null;

        makeAutoObservable(this)
    }

    clearCurrentModal = () => {
        this.currentModal = null;
    }

    setCurrentModal = (modal: any) => {
        this.currentModal = modal;
    }
}
