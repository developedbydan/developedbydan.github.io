document.lastScrollPostition = 0;


document.addEventListener('scroll', () =>{
    const direction = window.pageYOffset - document.lastScrollPostition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];
    
    document.lastScrollPostition = window.pageYOffset;
})