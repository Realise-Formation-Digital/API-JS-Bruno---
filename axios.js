import axios from './axios';

/**
 * @class
 * @classdesc wrapper of library  axios
 */

class Axios {
    /** 
     * Get method from Axios
     * @param {string} url
     * @returns {promise}
     */
    static async get(url) {
        try {
            console.log('[Axios][get] calling axios.get with axios')
            return await axios.get(url)
        } catch(e) {
            console.error('[Axios][get] An error occured when you exist',e)
            throw new Error(e)
        }
    }
}

export default Axios