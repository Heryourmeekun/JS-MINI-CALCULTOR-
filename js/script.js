let topdiv = document.querySelector(".bottomdiv");
let btn = document.querySelectorAll('button');
let value = document.getElementById("value");
let i;

for (i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function () {
        value.style.opacity = "1";
        value.style.transition = "1s";
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        }
        else {
            if (this.innerHTML == "Clear") {
                value.innerHTML = "";
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}