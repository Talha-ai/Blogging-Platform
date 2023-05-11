const btn = document.querySelector('.login');
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.close');



btn.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
})

closeBtn.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})