window.addEventListener('load', plugPlayer);

function plugPlayer(){
    const div = document.querySelector('#player');
    // Deseralize (JSON String to Object Convert)
    const currentSongObject = JSON.parse(sessionStorage.currentSong);
    div.appendChild(createCard(currentSongObject));    
    // div.appendChild(createImage(currentSongObject.photo));
    // div.appendChild(createPTag(currentSongObject.name));
    // div.appendChild(buildPlayer(currentSongObject.playurl));
}

function createH5(name){
    const h5Tag = document.createElement('h5');
    h5Tag.className = 'card-title';
    return h5Tag;
}

function createCard(currentSongObject){
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width ='28rem';
    card.appendChild(createImage(currentSongObject.photo));
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);
    cardBody.appendChild(createH5(currentSongObject.name));
    cardBody.appendChild(createPTag(currentSongObject.name));
    cardBody.appendChild(buildPlayer(currentSongObject.playurl));
    return card;

    /*
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    */
}

function buildPlayer(playurl){
    const audio = document.createElement('audio');
    
   
    audio.src =  playurl;
    audio.controls = true;
    audio.type= 'audio/mp4';
    return audio;
}

function createImage(imageName){
    const img = document.createElement('img');
    img.src = imageName;
    img.className = 'img-thumbnail hand';
   
    return img;
}

function createPTag(txt){
    const pTag = document.createElement('p');
    pTag.innerText = txt;
    return pTag;
}