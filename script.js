const images = ["./images/png1.gif", './images/png2.gif', './images/png3.gif'];
const container = document.querySelector('.mediaCircle img');
const heading = document.querySelectorAll('.heading h1');
const mediaCircle = document.querySelector('.mediaCircle');
const head = document.querySelector('.heading')


heading.forEach((elem, id) => {
    elem.addEventListener('mousemove', (dets) => {
        
        gsap.to(mediaCircle, {
            x: dets.clientX + 'px',
            y: dets.clientY  + 'px',
            duration:.5

        });
        container.src = images[id];

    })
})



function leaveEnter() {
    head.addEventListener('mouseenter', () => {

        gsap.to(mediaCircle,
            {
                scale: 1,
                duration: 0.3
            });
    });

    head.addEventListener('mouseleave', () => {
        gsap.to(mediaCircle,
            {
                scale: 0,
                duration: 0.3
            });
    });
}


function costumCursor() {
    const cursor = document.querySelector('.cursor');
    
    window.addEventListener('mousemove', (dets) => {

        gsap.to(cursor, {
            x: dets.clientX + 'px',
            y: dets.clientY + 'px',
            duration: .3

        })
    })
}

function imageSlider(){

    gsap.to('.imageSlider', {
        scrollTrigger: {
            trigger: '.imageContainer3',
            start: "top 14%",
            end: 'top -90%',
            scrub: 4,
            pin: true,
            // markers:true,
    
        },
        y: "-303%"
    })
    
    gsap.to('.page3', {
        scrollTrigger: {
            trigger: '.page3',
            start: "top top",
            end: 'top -100%',
            pin: true,
        }
    })
}


if(window.innerWidth>600){
    console.log('workinggg');
    
    costumCursor();
    leaveEnter();
    imageSlider();

    
}