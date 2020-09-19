function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height <= bRect.top ||
        aRect.top >= bRect.top + bRect.height ||
        aRect.left + aRect.width <= bRect.left ||
        aRect.left >= bRect.left + bRect.width
    );
}

const avatar = document.getElementById('avatar');
const coin = document.getElementById('coin');
const msg=document.getElementById('msg');
const coincount=document.getElementById('coincount');

const snake=document.getElementById('snake');
const snake1=document.getElementById('snake1');

const girl2=document.getElementById('girl2');
const girl1=document.getElementById('girl1');
const treasure=document.getElementById('treasure');

const plant=document.getElementById('plant');
// const coincount2=0;
const count=0;

var greedy=0;
var bait=0;
var pl=0;

window.addEventListener("keyup", function(e) {

        if (e.key === "ArrowDown") {
            const pos = extractpos(avatar.style.top);
            avatar.style.top = `${pos+50}px`;
        } else if (e.key === "ArrowRight") {
            const pos = extractpos(avatar.style.left);
            avatar.style.left = `${pos+50}px`;
            avatar.style.transform = 'scale(-1,1)';
        } else if (e.key === "ArrowUp") {
            const pos = extractpos(avatar.style.top);
            avatar.style.top = `${pos-50}px`;
        } else if (e.key === "ArrowLeft") {
            const pos = extractpos(avatar.style.left);
            avatar.style.left = `${pos-50}px`;
            avatar.style.transform = 'scale(1,1)';
        }
        if (isTouching(avatar, coin)) movecoin();
        if(isTouching(avatar,snake)||isTouching(avatar,snake1)){
            
            msg.innerText="Be careful";
            msg.style.color="red";
            setTimeout(()=>{
                msg.innerText='';
                msg.style.color="black";
            },3000);
        }
        if(greedy===0){
            if(isTouching(avatar,treasure)){
            
                msg.innerText="You Greedy";
                msg.style.color="red";
                setTimeout(()=>{
                    msg.innerText='';
                    msg.style.color="black";
                },4000);
                greedy++;
            }
        }
        if(isTouching(avatar,girl1)||isTouching(avatar,girl2)){
            if(bait===0)
            {   
                msg.style.color="red";
                msg.innerText="Warning:That is bait";
                bait++;
            }
            else {
                msg.innerText="Told you ";
                msg.style.color="red";
                coincount.innerText=`${(parseInt(coincount.innerText))/2}`;
                coincount.style.fontSize="30px";
            }
            setTimeout(()=>{
                msg.innerText='';
                msg.style.color="black";
            },4000);
        }
        var img;
        if(isTouching(avatar,plant)){
                            
            msg.innerText="Wanna Help in planting";
             if(pl===0){

                 img=document.createElement('img');
                img.src="assets/element/animated-flower-image-0021.gif";
                img.style.position="absolute";
                const va = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
                            
                document.body.append(img);
                    const rota = Math.floor(Math.random() * 360);
                    const x = va[Math.floor(Math.random() * 11)];
                    const y = va[Math.floor(Math.random() * 6)];
                    img.style.transform = `translate(${x}px,${y}px) rotate(${rota}deg)`;

            
            msg.style.color="red";
            setTimeout(()=>{
                msg.innerText='';
                msg.style.color="black";
            },4000);
            pl++;
             }
        }
        if(isTouching(avatar,img)){
            
            msg.innerText="Sweet of you";
            msg.style.color="red";
            setTimeout(()=>{
                msg.innerText='';
                msg.style.color="black";
            },4000);
            greedy++;
        }
        
        
    }



)
var img=document.createElement('img');
img.src="assets/element/animated-flower-image-0021.gif";
const val = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];

function movecoin() {
    const x = val[Math.floor(Math.random() * 11)];
    const y = val[Math.floor(Math.random() * 6)];
    

    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
    const coincount2= parseInt(coincount.innerText);
    coincount.style.fontSize="20px";
    coincount.innerText=`${coincount2+10}`;
}

function extractpos(a) {
    if (!a)
        return 100;
    return parseInt(a.slice(0, -2));
};

function myFunction() {
    avatar.classList.add('set');
}