import { URLS } from "../../../shared/config/constants.js"
import { apiClient } from "../../../shared/services/api-client.js"
import { Song } from "../models/song.js";

export const songService = {

    async getSongsBySinger(singerName){
        const FULL_URL = `${URLS.SONGS_URL}term=${singerName}&limit=25`;
        try{
        const response = await apiClient.get(FULL_URL);
        const songs = await response.json();
        const arr = songs['results'];
        const songsArray= arr.map(song => new Song(song['artistName'], song['artworkUrl100'], song['trackName'], song['previewUrl']));    
        return songsArray;
        // Conversion Logic

        //console.log('Songs ', songs);
        }
        catch(err){
            throw err;
        }
    },
    getLatestSongs(){

    },
    getOldSongs(){

    }
}