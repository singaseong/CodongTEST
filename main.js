const toggle = document.querySelector('.top_down_bar'); //class node 중 navbar_toggleBtn 지정
const menu = document.querySelector('.nav-list');
const icons = document.querySelector('.link_logo');

toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active'); // click했을 때 active가 없다면 active를 추가해 주고 있으면 active를 없애줌
    icons.classList.toggle('active');
});