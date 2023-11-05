const mode = document.getElementById('mode');
const sign = document.getElementById('sign');
const checkbox = document.querySelector('.checkbox');
const body = document.querySelector('.body');
const header = document.querySelector('.header')
const ball = document.querySelector('.ball')
const hamburger =document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const links =document.getElementsByClassName('links');
const heroInfo = document.getElementsByClassName('hero-info');
const btn = document.querySelector('.btn')
const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')
const icon3 = document.getElementById('icon3')
const heroSection = document.querySelector('.hero-section');
const LowerHero = document.querySelector('.lower-hero-section');
const TopLowerHero = document.querySelector('.top-lower-hero');
const linksHover = document.querySelector('.links')
const experience = document.querySelectorAll('.experience')
const computedLinksStyle = getComputedStyle(linksHover, '::after');
const reviewCard = document.querySelectorAll('.review-card');
const reviewsHeading = document.querySelector('.reviewsHeading');
const milestoneHeading = document.querySelector(".milestoneHeading");
const contactus = document.querySelector('.contactus');
var isClicked = false;
const changeMode = ()=>{
    const value =mode.checked;
    if(value){
        // light mode 
      sign.classList.remove('fa-sun');
      sign.classList.add('fa-moon');
      checkbox.style.flexDirection='row-reverse';
      body.style.backgroundColor='var(--pry-clr)';
      for(let i=0;i<reviewCard.length;i++){
        reviewCard[i].style.color='var(--bg-clr)'
      reviewCard[i].style.backgroundColor='var(--pry-h-clr)'
      }
      for(let i=0;i<experience.length;i++){
        experience[i].style.color='var(--bg-clr)';
      }
      reviewsHeading.style.color='var(--bg-clr)'
      milestoneHeading.style.color='var(--bg-clr)'

      header.style.color='var(--bg-clr)';
      ball.style.backgroundColor ='var(--pry-clr)'
      checkbox.style.backgroundColor='var(--bg-clr)';
      icon1.style.color = 'var(--bg-clr)';
      icon2.style.color = 'var(--bg-clr)';
      icon3.style.color = 'var(--bg-clr)';
      LowerHero.style.backgroundColor='var(--pry-clr)';
      btn.style.backgroundColor='var(--bg-clr)';
      TopLowerHero.style.color='var(--bg-clr)';
      contactus.style.color='var(--bg-clr)';
      for(let i=0;i<heroInfo.length;i++){
        heroInfo[i].style.color='var(--bg-clr)';
      }
    
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'var(--bg-clr)';
    }
    btn.style.color='var(--pry-clr)'
   }
    else{
        // dark mode 
        sign.classList.remove('fa-moon');
        sign.classList.add('fa-sun');
        checkbox.style.flexDirection='row';
        header.style.color='var(--pry-clr)';
        for(let i=0;i<experience.length;i++){
          experience[i].style.color='var(--pry-clr)';
        }
        reviewsHeading.style.color='var(--pry-clr)';
        milestoneHeading.style.color='var(--pry-clr)';
        for(let i=0;i<reviewCard.length;i++){
          reviewCard[i].style.color='var(--pry-clr)'
          reviewCard[i].style.backgroundColor='var(--bg-clr)'
        }
        contactus.style.color='var(--pry-clr)';
        checkbox.style.backgroundColor='var(--pry-clr)'
      body.style.backgroundColor='var(--bg-clr)';
      btn.style.color='var(--bg-clr)'
      icon1.style.color = 'var(--pry-clr)';
        icon2.style.color = 'var(--pry-clr)';
        icon3.style.color = 'var(--pry-clr)';
        LowerHero.style.backgroundColor='var(--bg-clr)';
      btn.style.backgroundColor='var(--pry-clr)';
      TopLowerHero.style.color='var(--pry-clr)';
      for(let i=0;i<heroInfo.length;i++){
        heroInfo[i].style.color='var(--pry-clr)';
      }
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'var(--pry-clr)';
    }
      ball.style.backgroundColor ='var(--pink-clr)';
    }
}
mode.addEventListener('click',()=>{
    changeMode();
})
const disableButtons = () => {
  btn.disabled = true; 
};
const enableButtons = () => {
  btn.disabled = false; 
};
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('fa-xmark')
    if(hamburger.classList.contains('fa-xmark')){
        header.style.overflow='visible';
        heroSection.style.filter= 'blur(7px)'; 
        disableButtons();
       
    }
    else{
        heroSection.style.filter= 'blur(0px)';
        header.style.overflow='hidden';
        // enableButtons();
    }
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
      if (hamburger.classList.contains('fa-xmark')) {

          hamburger.classList.remove('fa-xmark');
          heroSection.style.filter= 'blur(0px)';
        header.style.overflow='hidden';
      }
  });
});





