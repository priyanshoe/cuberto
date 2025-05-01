const images = ["./images/png1.gif",'./images/png2.gif','./images/png3.gif'];
const container = document.querySelector('.mediaCircle img');
const heading = document.querySelectorAll('.heading h1');
const mediaCircle = document.querySelector('.mediaCircle');


heading.forEach((elem,id)=>{
    elem.addEventListener('mousemove',(dets)=>{
        mediaCircle.style.left=dets.x+'px';
        mediaCircle.style.top=dets.y+'px';
        container.src = images[id];
        
    })
})



function leaveEnter(){
    const head = document.querySelector('.heading');
    head.addEventListener('mouseenter',()=>{
        mediaCircle.style.scale=1
    })
    head.addEventListener('mouseleave',()=>{
        mediaCircle.style.scale=0
    })
}
leaveEnter();


function costumCursor(){
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove',(dets)=>{
        cursor.style.left = dets.clientX +'px';
        cursor.style.top = dets.clientY +'px';
    })
}
costumCursor();


gsap.to('.imageSlider',{
    scrollTrigger:{
        trigger:'.imageContainer3',
        start:"top 10%",
        end:'top -90%',
        scrub:4,
        pin:true
    },
    y:"-303%"
})

gsap.to('.page3',{
    scrollTrigger:{
        trigger:'.page3',
        start:"top top",
        end:'top -100%',
        pin:true,
        // markers:true,
    }
})