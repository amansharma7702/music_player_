const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
 {
        name:"Bad Bunny, Drake - MIA (LyricsLetra)",
        title:"MIA",
        artist:"Bad Bunny, Drake",
        img:"0",
        
},
 {
        name:"Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse)",
        title:"Sunflower",
        artist:"Post Malone, Swae Lee",
        img:"1",
        
},
{
        name:"Twenty One Pilots - Stressed Out (Tomsize Remix)",
        title:"Stressed Out",
        artist:"Twenty One Pilots",
        img:"2",
},
{
        name:"Confetti - Ghost",
        title:"Ghost",
        artist:"Confetti",
        img:"3",
},
{
        name:"Blackway & Black Caviar - What's Up Danger (Spider-Man Into the Spider-Verse) [Official Audio]",
        title:"What's Up Danger",
        artist:"Blackway & Black Caviar",
        img:"4",
},

{
        name:"Confetti - Right Now",
        title:"Right Now",
        artist:"Confetti",
        img:"5",
},

{
        name:"Enrique Iglesias - MOVE TO MIAMI (Official Video) ft. Pitbull",
        title:"MOVE TO MIAMI",
        artist:"Enrique Iglesias ft. Pitbull",
        img:"6",
},

{
        name:"Come Together - Justice League Music Video",
        title:"Come Together",
        artist:"Justice League",
        img:"7",
},

{
        name:"Electric Light Orchestra - Mr Blue Sky (Guardians of the Galaxy 2_ Awesome Mix V",
        title:"Mr Blue Sky",
        artist:"Electric Light Orchestra",
        img:"8",
},

{
        name:"y2mate.com - 8_graves_beast_lyrics_NtP6inWOKRw_320kbps",
        title:"Beast",
        artist:"8_graves",
        img:"9",
},

{
        name:"SLUMBERJACK & Machine Age - Daggers [Monstercat Release]",
        title:"Daggers",
        artist:"SLUMBERJACK & Machine Age",
        img:"15",
}
]

let isPlaying = false;
// for play
const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        
};

// for pause
const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        // img.classList.add("anime");
};

play.addEventListener('click', () => {
        if (isPlaying) {
                pauseMusic();
        }
        else {
                playMusic();
        }
});

const loadSong = (songs)=>{
   title.textContent = songs.title;
   artist.textContent = songs.artist;
   music.src = "Songs/"+songs.name+".mp3";
   img.src = "Garud/"+songs.img+".jpg"

};

songIndex = 0;

const nextSong = () => {
        songIndex = (songIndex + 1)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
};
const prevSong = () => {
        songIndex = (songIndex - 1 + songs.length)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);