
import axios from 'axios'
const ID = 'f5cb0b965ea1564c50c6f1b74534d823'


export default {
    getDetails: async function (cityName) {
        return axios({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=` + ID,
            timeout: 1000,
        })

    },

    getCityImg: async function (img) {
        console.log("img",img)
       /*  console.log("img",url) */
        return axios({
            method: 'get',
            url: `http://openweathermap.org/img/w/` + img + `.png`,
            timeout: 1000,
        })

    },


}
