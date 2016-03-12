import * as actions from "./backdrop.actions";

export class Backdrop {
    constructor(private $compile,
        private $q,
        private store) {

        store.subscribe(this.storeOnChange);
    }

    storeOnChange = state => {

    }

}
