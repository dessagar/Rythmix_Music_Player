// console.log("welcome to sotify")

// let songIndex=0;
// let audioElement=new Audio('songs/1.mp3');
// // let audioElement;

// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems=Array.from(document.getElementsByClassName('songItem'));



// let songs=[
    // {songName: "Phir Aur Kya Chahiye" , filePath:"songs/1.mp3" , coverPath:"covers/11.jpg"},
    // {songName: "Tu Banke Hava" , filePath:"songs/2.mp3" , coverPath:"covers/12.jpg"},
    // {songName: "Mahi Mera Dil" , filePath:"songs/3.mp3" , coverPath:"covers/13.jpg"},
    // {songName: "Tumhe Kitna Pyar karte" , filePath:"songs/4.mp3" , coverPath:"covers/14.jpg"},
    // {songName: "Allah De Bande" , filePath:"songs/5.mp3" , coverPath:"covers/15.jpg"},
    // {songName: "Pasoori Nu" , filePath:"songs/6.mp3" , coverPath:"covers/16.jpeg"},
    // {songName: "Deva Deva" , filePath:"songs/7.mp3" , coverPath:"covers/17.jpg"},
    // {songName: "O Bedardeya" , filePath:"songs/8.mp3" , coverPath:"covers/18.jpg"},
    // {songName: "Dil De Diya" , filePath:"songs/9.mp3" , coverPath:"covers/19.png"},
    // {songName: "Chupke Chupke" , filePath:"songs/10.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Beshram Rang" , filePath:"songs/11.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Tere Pyar Me" , filePath:"songs/12.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Pyar Hota Kayi Baar hai" , filePath:"songs/13.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Show Me The Thumka" , filePath:"songs/14.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Jaadui" , filePath:"songs/15.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Jhoome Jo Pathaan" , filePath:"songs/16.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Le Aaunga" , filePath:"songs/17.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Dhaagon Se Baandhaa" , filePath:"songs/18.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Janabe Ali" , filePath:"songs/19.mp3" , coverPath:"covers/3.jpg"},
//     // {songName: "Tera Huva" , filePath:"songs/20.mp3" , coverPath:"covers/3.jpg"},
// ]

// songItems.forEach((element , i)=>{
//     element.getElementsByTagName("img")[0].src= songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })

// //handleplay
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
// })

// //listen to event
// audioElement.addEventListener('timeupdate',()=>{

  
  
//     //updateseekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value = progress;

// }) 
// myProgressBar.addEventListener('change',() => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

// })

// // const makeAllPlays = ()=>{
// //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
// //         e.target.classList.remove('fa-pause-circle');
// //         e.target.classList.add('fa-play-circle');
// //     })
// // }

// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
// //     element.addEventListener('click' , (e)=>{
// //         makeAllPlays();
// //         index=parseInt(e.target.id);
// //         e.target.classList.remove('fa-play-circle');
// //         e.target.classList.add('fa-pause-circle');
// //         audioElement.src = 'songs/${songIndex+1}.mp3';
// //         audioElement.currentTime=0;
// //         audioElement.play();

// //         masterPlay.classList.remove('fa-play-circle');
// //         masterPlay.classList.add('fa-pause-circle');

// //     })
// // })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
        
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Phir Aur Kya Chahiye" , filePath:"songs/1.mp3" , coverPath:"covers/11.jpg"},
    {songName: "Tu Banke Hava" , filePath:"songs/2.mp3" , coverPath:"covers/12.jpg"},
    {songName: "Mahi Mera Dil" , filePath:"songs/3.mp3" , coverPath:"covers/13.jpg"},
    {songName: "Tumhe Kitna Pyar karte" , filePath:"songs/4.mp3" , coverPath:"covers/14.jpg"},
    {songName: "Allah De Bande" , filePath:"songs/5.mp3" , coverPath:"covers/15.jpg"},
    {songName: "Pasoori Nu" , filePath:"songs/6.mp3" , coverPath:"covers/16.jpeg"},
    {songName: "Deva Deva" , filePath:"songs/7.mp3" , coverPath:"covers/17.jpg"},
    {songName: "O Bedardeya" , filePath:"songs/8.mp3" , coverPath:"covers/18.jpg"},
    {songName: "Dil De Diya" , filePath:"songs/9.mp3" , coverPath:"covers/19.png"},
    {songName: "Chupke Chupke" , filePath:"songs/10.mp3" , coverPath:"covers/3.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})