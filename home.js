(function(){
 if(/[?&]review/.test(location.search))document.documentElement.classList.add('review');
 var t=document.querySelector('.nav__toggle'),m=document.getElementById('menu');
 t.addEventListener('click',function(){var o=m.classList.toggle('is-open');t.setAttribute('aria-expanded',o)});
 m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('is-open');t.setAttribute('aria-expanded',false)}});
 document.addEventListener('click',function(e){var a=e.target.closest('[data-event]');if(a){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:a.dataset.event})}});
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(pointer:fine)').matches)return;
 var pl=document.querySelectorAll('.c-plane'),hz=document.querySelector('[data-parallax]');
 if(!hz)return;
 hz.addEventListener('pointermove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;pl.forEach(function(p){var d=+p.dataset.d;p.style.transform='translate('+(x*d).toFixed(1)+'px,'+(y*d).toFixed(1)+'px)'})});
})();
(function(){
 var f=document.querySelector('.c-dia__fig');if(!f)return;
 var bs=document.querySelectorAll('.c-dia__list button');
 function set(v){f.dataset.active=v||'';bs.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.layer===v?'true':'false')})}
 bs.forEach(function(b){b.setAttribute('aria-pressed','false');
  b.addEventListener('mouseenter',function(){set(b.dataset.layer)});b.addEventListener('focus',function(){set(b.dataset.layer)});
  b.addEventListener('click',function(){set(f.dataset.active===b.dataset.layer?'':b.dataset.layer)});});
 document.querySelector('.c-dia__list').addEventListener('mouseleave',function(){if(!document.activeElement||!document.activeElement.closest('.c-dia__list'))set('')});
})();
