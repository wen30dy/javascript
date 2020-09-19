// function jugg() {

//     const rota = Math.floor(Math.random() * 360);
//     const x = Math.floor(Math.random() * document.body.clientWidth);
//     const y = Math.floor(Math.random() * document.body.clientHeight);
//     g1.style.transform = `translate(${x}px,${y}px) rotate(${rota}deg)`;

//     console.log('hello');
// }

var start;

function append() {
    var myimg = document.createElement('img');
    var loca = ["jugimg/img1.png", "jugimg/img2.png", "jugimg/img3.png", "jugimg/img4.png", "jugimg/img5.png", "jugimg/img6.png", "jugimg/img7.png", "jugimg/img8.png"];
    myimg.style.width = '100px';
    myimg.style.transition = 'all 1.5s';
    myimg.src = loca[Math.floor(Math.random() * loca.length)];
    document.body.append(myimg);
    setInterval(() => {
        const rota = Math.floor(Math.random() * 360);
        const x = Math.floor(Math.random() * document.body.clientWidth);
        const y = Math.floor(Math.random() * document.body.clientHeight);
        myimg.style.transform = `translate3d(${x}px,${y}px,${z}px) rotate(${rota}deg)`;
    }, 1000)
}

const allel = document.getElementById("head").children;
const allels = document.getElementById("main").children;


function juggle() {
    start = setInterval(() => {
        for (let el of allels) {
            const rota = Math.floor(Math.random() * 360);
            const x = Math.floor(Math.random() * document.body.clientWidth);
            const y = Math.floor(Math.random() * document.body.clientHeight);
            el.style.transform = `translate(${x}px,${y}px) rotate(${rota}deg)`;
            // console.log(x, y);

        }
        for (let l of allel) {
            const rota = Math.floor(Math.random() * 360);
            const x = Math.floor(Math.random() * document.body.clientWidth);
            const y = Math.floor(Math.random() * document.body.clientHeight);
            l.style.transform = `translate(${x}px,${y}px) rotate(${rota}deg)`;


        }

    }, 1000)


}

function stopper() {
    clearInterval(start);

}