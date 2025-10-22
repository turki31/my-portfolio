// تحديث السنة تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// تأثير صغير عند الضغط على أزرار العرض (مثال)
document.querySelectorAll('.icon-btn').forEach(b=>{
  b.addEventListener('click', e=>{
    if(b.getAttribute('href').startsWith('#')){
      e.preventDefault();
      b.style.transform='translateY(-6px)';
      setTimeout(()=>b.style.transform='',220);
    }
  })
})

// lazy reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting) ent.target.style.transform='translateY(0)';
  })
}, {threshold:0.12});
document.querySelectorAll('.project, .skill-badge').forEach(el=>{
  el.style.transform='translateY(12px)';
  el.style.transition='transform .5s cubic-bezier(.2,.9,.3,1)';
  observer.observe(el);
});

// (اختياري) يمكنك تفعيل خلفية جزيئات بخطوط بسيطة داخل هذا الملف
