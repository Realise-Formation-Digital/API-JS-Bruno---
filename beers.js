import BeersService from "./BeersService";

/**
 * @class
 * @classdesc Beers view model
 * @author nobody
 */
class BeersViewModel {
    async start (){
        try{
            console.log('[BeersViewModel][start] calling Start when page start with params, ')
            const result = await BeersService.getBeersList();


            
        }catch(e) {
            console.error('[BeersService][start] an error occured when handle start',e)
            throw new Error(e)
        }
    }
}