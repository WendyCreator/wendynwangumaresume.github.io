const cards = document.querySelectorAll('.card-tech')
const theme = document.querySelector('#theme')
const radio = document.querySelectorAll('.radio')
const img = document.querySelector('.img img')
const checker = document.querySelector('#check')
const label = document.querySelector('#label')

const images = ['dsc_5880C.jpg', 'dsc_5879C.jpg']


const obj={
   root:null,
   threshold:0,
   rootMargin:'0px'
}

const callback = (entries)=>{
  entries.forEach(entry=>{
      if(entry.isIntersecting){
          entry.target.classList.remove('disappear')
         entry.target.classList.add('appear')
     }else{
          entry.target.classList.remove('appear')
          entry.target.classList.add('disappear')
   
      }
  })
}

const observer = new IntersectionObserver(callback, obj)

cards.forEach(card=>{
  observer.observe(card)
})

document.addEventListener('DOMContentLoaded', ()=>{
  img.classList.add('img-display')
  let i = 0;
  const txt = 'A Web Developer...'; 
  const speed =150;
  
  function typeWriter() {
    if (i < txt.length) {
      document.querySelector(".name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
})

let num = 0;
img.addEventListener('click', ()=>{
  num == 0 ? num=1:num=0;
  img.src = `assets/images/${images[num]}`
})

document.querySelector('#form').addEventListener('submit',(e)=>{
  // e.preventDefault();
  const checked =  e.target.checkValidity();
     if(!checked){
         e.preventDefault()
      }
      e.target.classList.add('was-validated')
  document.querySelector('#user-message').style.transform = 'scaleY(1)'


})

radio.forEach(mode=>{
    mode.addEventListener('click', (e)=>{
      
      if(e.target.id == 'dark'){
        theme.classList.remove('light')
        theme.classList.add('dark')
      } else{
        theme.classList.remove('dark')
        theme.classList.add('light')
      }
    })
})

checker.addEventListener('change', (e)=>{
  e.target.checked?checkLocal(true):checkLocal(false)
 const checkVal = JSON.parse(localStorage.getItem('theme'))[0]
 switchTheme(checkVal)
})

document.addEventListener('DOMContentLoaded', (e)=>{
  const checkVal = JSON.parse(localStorage.getItem('theme'))[0] ?? [][0]
  switchTheme(checkVal)

})

window.addEventListener('scroll', (e)=>{
  if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 20){
    document.querySelector('.up').classList.add('downup')
  }else{
    document.querySelector('.up').classList.remove('downup')

  }
 
})

function checkLocal(myTheme){
 const Thetheme =  JSON.parse(localStorage.getItem('theme')) ?? [];
Thetheme[0] = myTheme;
 localStorage.setItem('theme', JSON.stringify(Thetheme))
}

function switchTheme(chekval){
  if(chekval){
    theme.classList.remove('light')
    theme.classList.add('dark')
    label.innerHTML = 'Dark!'
    checker.checked = true;
  } else{
    theme.classList.remove('dark')
    theme.classList.add('light')
    label.innerHTML = 'Light'
  }
}



