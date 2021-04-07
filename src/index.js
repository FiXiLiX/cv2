import "./css/style.scss";

const PROGRES_DURATION = 4;

function postLike(button){
    let likes = button.nextElementSibling;
    if(button.classList.contains('liked')){
        likes.innerHTML = likes.innerHTML.replace('You and ', '');
        button.classList.remove('liked');
    }else{
        likes.innerHTML = 'You and ' + likes.innerHTML;
        button.classList.add('liked');
    }
}
window.postLike = postLike;


for(let h = 1; h <= 10; h++){
    let el = document.querySelector(".skills-progres__" + (h * 10));
    if(el){
        let Cont={val:0} , NewVal = (h * 10) ;
        gsap.to(".skills-progres__" + (h * 10), {duration: PROGRES_DURATION, width: (h * 10) + '%'});
        TweenLite.to(Cont,PROGRES_DURATION,{val:NewVal,roundProps:"val",onUpdate:function(){
            el.innerHTML=Cont.val + "%"
        }});
    }
}