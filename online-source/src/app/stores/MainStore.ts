import {ModalStore} from "./ModalStore";

class MainStore {
    modalStore: ModalStore;

    constructor() {
        this.modalStore = new ModalStore(this);
    }
}

export const mainStore = new MainStore();

export default mainStore;

export { MainStore };