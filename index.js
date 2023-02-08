

window.addEventListener('keydown', e => {
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.stick[data-key="${e.keyCode}"]`);
 const keys = document.querySelectorAll('.stick');

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  
  keys.forEach(e => {
    e.addEventListener('transitionend', (e) => {
       if(e.propertyName === '') return;
       key.classList.remove('playing')
       
    })
  })
});


