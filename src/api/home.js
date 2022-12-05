import request from "./index";


export const getHighScore=()=>request({
    url:'/home/highscore',
    method:'GET'
})