

((d)=>{

    const $navMenu = d.querySelector('.nav-menu'),
    $btnMenu = d.querySelector('.menu-btn');

    console.log($navMenu);

    $btnMenu.addEventListener('click', (e)=>{

            $btnMenu.firstElementChild.classList.toggle('none');
            $btnMenu.lastElementChild.classList.toggle('none');
            $navMenu.classList.toggle('is-active');

    });

    d.addEventListener('click', (e)=>{
        if(!(e.target.matches('.nav-menu a'))){
            return false;
        }else{
            $navMenu.classList.toggle('is-active');
        }
    });
})(document);