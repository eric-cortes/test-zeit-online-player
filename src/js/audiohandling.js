var audio = document.querySelector('audio');

if (audio) {

  window.addEventListener('keydown', function (event) {

    var key = event.which || event.keyCode;

    if (key === 32) { // spacebar

      event.preventDefault();

      audio.paused ? audio.play() : audio.pause();
      
    }

  });
}