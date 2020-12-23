var btn = document.querySelectorAll("button");
var backsp = document.getElementById("backsp");
var newline = document.getElementById("newline");
var space = document.getElementById("space");
const tab = document.getElementById("tab");

console.log(document);

var inp = document.querySelector("textarea");
console.log(btn.length + '\nxc v');
btn[2].addEventListener("click", function () {
    console.log(btn[2].textContent);
});

// btn.forEach.addEventListener("click", function () {
//     console.log(btn[2].textContent);

// })

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        inp.value = inp.value + btn[i].textContent;
    })
}

space.addEventListener("click", function () {
    inp.value = inp.value + " ";
})

newline.addEventListener("click", function () {
    inp.value = inp.value + "\n";
})

backsp.addEventListener("click", () => {
    l = inp.value.length;
    console.log(inp.value);
    console.log(l);
    l = l - 2;
    console.log(l);
    inp.value = inp.value.slice(0, l - 1);
    console.log(inp.value.slice(0, l - 1));
})

tab.addEventListener("click", () => inp.value = inp.value + "    ");

var hello = document.getElementById("ksn")
console.log(hello);
console.dir(hello);

