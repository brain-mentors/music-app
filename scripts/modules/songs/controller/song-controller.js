import { songService } from "../service/songs-service.js";

window.addEventListener('load', showSongs);

// Player
function bindListeners(audio){

}


async function showSongs(){
    // Get the Singer Name From the QueryString
    const singerName = getDataFromQueryString();
    const songs = await songService.getSongsBySinger(singerName);
    printSongs(songs);
    // Now it call some BackEnd Api Call and get the songs of given singer
    // print the songs on page
    // when we click on song , it play the song
}
const colors = ['primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
let index = 0;
function printSongs(songs){
    console.log('All Songs ',songs);
    songs.forEach(singleSongLayout);
}

function moveToThePlayerPage(){
    const currentImage = this;
    const currentSongObject = {
        'name': this.getAttribute('song-name'),
        'photo': this.src,
        'playurl': this.getAttribute('song-url')
    }
    // Serialize (Object to JSON String)
    sessionStorage.currentSong = JSON.stringify(currentSongObject);
    console.log('Current Image ', this);
    location.href = "player.html";
}

function createImage(singleSong){
    const img = document.createElement('img');
    img.src = singleSong.photo;
    img.className = 'img-thumbnail hand';
    img.setAttribute('song-name' , singleSong.name);
    img.setAttribute('song-url', singleSong.playurl);
    img.addEventListener('click', moveToThePlayerPage);
    return img;
}

function createPTag(txt){
    const pTag = document.createElement('p');
    pTag.innerText = txt;
    return pTag;
}

function createAudioTag(url){
    const audio = document.createElement('audio');
    audio.src =  url;
   // audio.controls = true;
    audio.type= 'audio/mp4';
    return audio;
}

function createIcon(url){
    const iTag = document.createElement('i');
    iTag.className= 'fa-solid fa-play hand';
    iTag.addEventListener('click', playSong);
    iTag.setAttribute('song-url', url);
    return iTag;
}
let that ;
function playSong(){
    const icon = this;
    // Prev Playing Song
    if(that && that !=this ){
        that.nextElementSibling.pause();
        that.className = 'fa-solid fa-play hand';
        isPlaying = false;
       
    }
    // Current song
    const audioTag = icon.nextElementSibling;
    if(isPlaying){
        audioTag.pause();
       
    }
    else{
        
        audioTag.play();
        }
        
    
    isPlaying = !isPlaying;
    that = icon;
    //<i class="fa-solid fa-pause"></i>
    this.className = isPlaying? 'fa-solid fa-pause hand':'fa-solid fa-play hand';
    
   // audioTag.play();
    console.log('I Get ', this.getAttribute('song-url'));

}
let isPlaying = false;
function singleSongLayout(singleSong){
    console.log('Single Song Layout call');
    const row = document.createElement('div');
    const col4 = document.createElement('div');
    col4.className = 'col-4';
    col4.appendChild(createImage(singleSong));
    const col6 = document.createElement('div');
    col6.className = 'col-6';
    col6.appendChild(createPTag(singleSong.name));
    col6.appendChild(createPTag(singleSong.detail));
    const col2 = document.createElement('div');
    col2.className = 'col-2';
    
    col2.appendChild(createIcon(singleSong.playurl));
    col2.appendChild(createAudioTag(singleSong.playurl));
    if(index>colors.length){
        index = 0;
    }
    row.className = `row  alert alert-${colors[index]}`;
    index++;
    row.appendChild(col4);
    row.appendChild(col6);
    row.appendChild(col2);
    const songsDiv = document.querySelector('#songs');
    console.log('SONGS DIV ', songsDiv);
     songsDiv.appendChild(row);
    /*
    <div class="row alert alert-primary">
        
        
        <div class="col-2">
            <i class="fa-solid fa-play"></i>
        </div>
      </div>
    */
}

function getDataFromQueryString(){
    const url = new URLSearchParams(location.href);
    
    
    for(let x of url.entries()){
         const singerName = x[1];
         return singerName;
    }
    
   
}