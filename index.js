const openBtn = document.querySelector('.burger-icon') 
const closeBtn = document.querySelector('.close-icon') 
const header =  document.querySelector('.mobile-header') 
openBtn.addEventListener('click', ()=>{
  console.log('click')
  document.querySelector('.mobile-header-menu').classList.add('active')
  document.querySelector('.burger-icon').classList.add('hidden')
  document.querySelector('.close-icon').classList.remove('hidden')
  header.classList.remove('bottom-border')
})
closeBtn.addEventListener('click', ()=>{
  console.log('click')
  document.querySelector('.mobile-header-menu').classList.remove('active')
  document.querySelector('.burger-icon').classList.remove('hidden')
  document.querySelector('.close-icon').classList.add('hidden')
  header.classList.add('bottom-border')
})