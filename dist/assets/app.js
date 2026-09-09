const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);menu.textContent=open?'×':'☰'});
let timer;
function notify(text){const n=document.getElementById('notice');n.textContent=text;n.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>n.classList.remove('show'),3500)}
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);notify('نمبر کاپی ہو گیا ہے');}catch{notify('کاپی نہیں ہو سکا؛ نمبر منتخب کر کے کاپی کیجیے۔')}}));
const form=document.getElementById('contact-form');
if(form){const subject=new URLSearchParams(location.search).get('subject');if(subject&&Array.from(form.subject.options).some(o=>o.value===subject))form.subject.value=subject;form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const message=`السلام علیکم! میرا نام ${form.elements.name.value.trim()} ہے۔\nموضوع: ${form.subject.value}\n${form.message.value.trim()}`;window.location.href='https://wa.me/923452656663?text='+encodeURIComponent(message);});}
