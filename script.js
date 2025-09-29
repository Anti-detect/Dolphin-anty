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

  // Set affiliate CTA link
  const cta = document.getElementById('affiliateCta');
  if(cta){
    cta.href = AFFILIATE_LINK;
    cta.setAttribute('target','_blank');
    cta.setAttribute('rel','noopener noreferrer');
  }
});
