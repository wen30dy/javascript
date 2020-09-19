// const btn = document.getElementById('clicker');
// btn.onclick = function() { alert('function defined in js file') }
// btn.onclick = function() { alert('function defined in js file second time') }
// only second one works

// btn.addEventListener("click", function() { console.log("clicked") })
// btn.addEventListener("click", function() { console.log("clicked seconf function at the same time") })
// const btn2 = document.getElementById('btn2');
// btn2.addEventListener('mouseover', function() {
//     console.log('MOUSED OVER ME!');
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
//     btn2.style.left = `${width}px`;
//     btn2.style.top = `${height}px`;
// });
// btn2.addEventListener('click', function() {
//     btn2.innerText = 'YOU GOT ME!';
//     document.body.style.backgroundColor = 'green';
// });

// BOXES WITH COLORS
const boxes = document.getElementById('boxes');
console.log(boxes);
const colors = [
    'rgb(252, 38, 73)',
    'rgb(216, 58, 84)',
    'rgb(199, 99, 116)',
    'rgb(197, 106, 121)',
    'rgb(180, 119, 129)',
    'rgb(173, 129, 137)',
    'rgb(167, 140, 144)',
    'rgb(146, 134, 136)'
]
for (let color of colors) {
    // console.log(color);
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.textContent = color;
    box.style.textAlign = 'center';
    box.style.lineHeight = '2rem';
    box.classList.add('boxstyle');
    boxes.appendChild(box);
    box.addEventListener("click", function(e) {
        // console.log(e);
        document.body.style.backgroundColor = color;
        box.style.color = "white";

    })


}
const body = document.querySelector('#container');

body.addEventListener("dblclick", function(ee) {
        // console.log(ee);

        console.log(document.body.style.backgroundColor);
        document.body.style.backgroundColor = "white";
    })
    // ____________________________________________________________
const ul = document.createElement('ul');
console.log(ul);
body.insertAdjacentElement("beforeend", ul);
const add = document.getElementById("add");
add.addEventListener("keypress", function(e) {

    if (e.key === "Enter" && this.value !== "") {
        let li = document.createElement("li");
        li.innerHTML = `<i>${this.value}</i>`;
        ul.appendChild(li);
        this.value = "";

    }
})