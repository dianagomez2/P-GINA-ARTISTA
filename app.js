
let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('musica/Te alejas más de mí');
  myMusic = loadSound('musica/fuimos amor');
  mySo = loadSound('musica/Mr trance');
  myNd = loadSound('musica/Esa parte de mí');
  myS5= loadSound('musica/Un día en Paris');
}



function setup() {
  let cnv = createCanvas(100, 100);
 // cnv.parent("#contenedor")

  let song1 = select("#cancion1");
  song1.mousePressed(playCancionA);



  let song2 = select("#cancion2");
  song2.mousePressed(playCancionB);


  let song3 = select("#cancion3");
  song3.mousePressed(playCancionC);

  let song4 = select("#cancion4");
  song4.mousePressed(playCancionD);

  let song5 = select("#cancion5");
  song5.mousePressed(playCancionE);


}



function playCancionA() {
    if(mySound.isPlaying()===false){
        mySound.play();
    }
   
    
}

function playCancionB() {
    if(myMusic.isPlaying()===false){
        myMusic.play();
    }

}

function playCancionC() {
    if(mySo.isPlaying()===false){
        mySo.play();
    }
}

function playCancionD() {
    if(myNd.isPlaying()===false){
        myNd.play();
    }
}

function playCancionE() {
    if(myS5.isPlaying()===false){
        myS5.play();
    }

}





function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    myMusic.play();
  }

  function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mySo.play();
  }

  function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    myNd.play();
  }

  function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    myS5.play();
  }


