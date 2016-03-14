import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SponsorActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, sponsorService, guid) {
        super($location,sponsorService,dispatcher,guid,AddOrUpdateSponsorAction,AllSponsorsAction,RemoveSponsorAction,SetCurrentSponsorAction)
    }    
}


export class AddOrUpdateSponsorAction { constructor(public id, public entity) { } }

export class AllSponsorsAction { constructor(public id, public entities) { } }

export class RemoveSponsorAction { constructor(public id, public entity) { } }

export class SponsorsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSponsorAction { constructor(public id) { } }
