import { rootUrl } from "./const";
import axios from "./axios";
/**
 * @class
 * @classdesc Service for beers
 * @author le best du best
 */
class BeersService {

    static async getBeersList () {
        try {
            console.log('[BeersService][getBeersList] Calling ')
            return await axios.get(rootUrl + 'beers');
        } catch (e) {
            console.error('[BeersService][getBeersList] An error occurred when fecthing beers list',e)
            throw new Error(e);
        }
    }
}

export default BeersService