function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.getElementById('player');
const coin = document.getElementById('coin');


window.addEventListener("keyup", function(e) {
        if (e.key === "Enter") window.stop();
        if (e.key === "ArrowDown") {
            const pos = extractpos(avatar.style.top);
            avatar.style.top = `${pos+100}px`;
        } else if (e.key === "ArrowRight") {
            const pos = extractpos(avatar.style.left);
            avatar.style.left = `${pos+100}px`;
            avatar.style.transform = 'scale(1,1)';
        } else if (e.key === "ArrowUp") {
            const pos = extractpos(avatar.style.top);
            avatar.style.top = `${pos-100}px`;
        } else if (e.key === "ArrowLeft") {
            const pos = extractpos(avatar.style.left);
            avatar.style.left = `${pos-100}px`;
            avatar.style.transform = 'scale(-1,1)';
        }
        if (isTouching(avatar, coin)) movecoin();
    }



)
const val = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

function movecoin() {
    const x = val[Math.floor(Math.random() * 12)];
    const y = val[Math.floor(Math.random() * 7)];
    console.log(x, y);

    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

function extractpos(a) {
    if (!a)
        return 100;
    return parseInt(a.slice(0, -2));
};

function myFunction() {
    avatar.classList.add('set');
}