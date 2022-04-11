const personal = document.querySelector('#personal');
const business = document.querySelector('#business');

personal.addEventListener('mouseover', () => {

    document.querySelector('.nav-dropdown-personal').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'


    personal.addEventListener('mouseout', () => {

        document.querySelector('.nav-dropdown-personal').style.cssText = 'opacity: 0; visibility: hidden';
        document.querySelector('.navbar-wrapper').style.background = 'none'
    })

})

business.addEventListener('mouseover', () => {

    document.querySelector('.nav-dropdown-business').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'


    business.addEventListener('mouseout', () => {

        document.querySelector('.nav-dropdown-business').style.cssText = 'opacity: 0; visibility: hidden';
        document.querySelector('.navbar-wrapper').style.background = 'none'
    })

})

// go to Login page
document.querySelector('#login').addEventListener('click',()=> {
    document.querySelector('.front-page').style.display='none';
 
    setTimeout(() => {
        document.querySelector('.loading').style.display='flex';
        setTimeout(() => {
            document.querySelector('.loading').style.display='none';
            document.querySelector('.login-page').style.display='block';
        }, 2000);
    }, 1000);
    
       

})


document.querySelector('.login-logo').addEventListener('click',() =>{
    document.querySelector('.login-page').style.cssText='display: none;';
    document.querySelector('.front-page').style.display='block';
})

//menu
const menuIcon = document.querySelector('.menu');

