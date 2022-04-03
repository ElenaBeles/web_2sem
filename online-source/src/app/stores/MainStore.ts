import {ModalStore} from "./ModalStore";
import {CommoditiesStore} from "./CommoditiesStore";
import {UsersStore} from "./UsersStore";

class MainStore {
    modalStore: ModalStore
    commoditiesStore: CommoditiesStore
    usersStore: UsersStore

    constructor() {
        this.modalStore = new ModalStore(this);
        this.commoditiesStore = new CommoditiesStore(this)
        this.usersStore = new UsersStore(this)
    }
}

export const mainStore = new MainStore();

export default mainStore;

export { MainStore };