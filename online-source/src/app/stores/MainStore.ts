import {ModalStore} from "./ModalStore";
import {CommoditiesStore} from "./CommoditiesStore";

class MainStore {
    modalStore: ModalStore
    commoditiesStore: CommoditiesStore

    constructor() {
        this.modalStore = new ModalStore(this);
        this.commoditiesStore = new CommoditiesStore(this)
    }
}

export const mainStore = new MainStore();

export default mainStore;

export { MainStore };