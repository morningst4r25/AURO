window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),900));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('show')),{threshold:.15});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
