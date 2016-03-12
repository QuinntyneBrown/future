import * as actions from "./modal.actions";

export class Modal {
    constructor(private $compile,
        private $location,
        private $q,
        private $rootScope,
        private store) {

        store.subscribe(this.storeOnChange);
    }

    storeOnChange = state => {

    }

    openAsync = options => {

    }
    

    compileAsync = () => {

    }


    closeAsync = () => {

    }

    dispose = () => { }

    get html() { return this._html; }


    options;
    $scope;
    augmentedJQuery;
    nativeElement;
    _html;
    pinned = false;
}
