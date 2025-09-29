// Placeholder for affiliate link. Replace with your real affiliate URL.
const AFFILIATE_LINK = 'https://multilogin.example/affiliate?ref=YOUR_AFFILIATE_CODE';

document.addEventListener('DOMContentLoaded', ()=>{
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  if(langBtn && langMenu){
    langBtn.addEventListener('click', ()=>{
      langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', (e)=>{
      if(!langBtn.contains(e.target) && !langMenu.contains(e.target)){
        langMenu.style.display = 'none';
      }
    });
  }

  // Bind affiliate link to any CTA marked with data-affiliate="true" or id starting with 'affiliate'
  const ctas = Array.from(document.querySelectorAll('[data-affiliate="true"], a[id^="affiliate"]'));
  ctas.forEach(el => {
    try{
      el.href = AFFILIATE_LINK;
      el.setAttribute('target','_blank');
      el.setAttribute('rel','noopener noreferrer');
    }catch(e){
      // ignore non-anchor elements
    }
  });
});
