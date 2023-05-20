import { URLS } from "../../../shared/config/constants.js";
import { apiClient } from "../../../shared/services/api-client.js"
import Singer from "../models/singer.js";

export const singerService = {
    async getAllSingers(){
        try{
       const response  = await apiClient.get(URLS.SINGER_URL);  
       const data = await response.json();
       const singerArray = data.singers.map(singer=>{
        const singerObject= new Singer(singer.name, singer.photo);
        return singerObject;
    });
    return singerArray;
      // console.log('Singers are ', singers);
        }
        catch(err){
            console.log(err);
            throw new Error("Can't Load Singer JSON Some Error "+err);
        }
          
    },
    addANewSinger(){

    }
}