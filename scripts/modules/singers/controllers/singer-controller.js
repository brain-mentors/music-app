import { singerService } from "../service/singer-service.js";

window.addEventListener('load', getAllSingers);
async function getAllSingers(){
    const singers = await singerService.getAllSingers();
    singers.forEach(createSingerDiv);
    console.log('Singers are ::: ', singers);
}

function createSingerDiv(singer){
    /*
     <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      */
     console.log('Singer Object is ',singer);
     const div = document.createElement('div');
     div.setAttribute('singer-name', singer.name);
     div.className = 'me-5 hand';
     const image = document.createElement('img');
     image.src = singer.url;
     image.role = "img";
     image['aria-label']="Placeholder"
     image.className = 'bd-placeholder-img rounded-circle';
     image.width = '140';
     image.height =  "140";
     image.preserveAspectRatio="xMidYMid slice"
     const h2 = document.createElement('h2');
     h2.className = 'fw-normal';
     h2.innerText = singer.name;
     div.appendChild(image);
     div.appendChild(h2);
     div.addEventListener('click', getSongs);
     const singerDiv = document.querySelector('#all-singers');
     singerDiv.appendChild(div);

}

function getSongs(){
    //console.log('Get Songs Call ', this.getAttribute('singer-name'));
    let singerName = this.getAttribute('singer-name');
    location.href=("songs.html?singername="+singerName);
}