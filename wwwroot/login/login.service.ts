export class LoginService {
    constructor(private $q: angular.IQService, private apiEndpoint, private fetch) {
        
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/login"; }

}
