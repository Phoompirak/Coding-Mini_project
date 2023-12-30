// แม่สูตรคูณ
function my_xd() {
    let input_number = document.getElementById("input-number").value;
    console.log(input_number);
    let text_mother = "";
    if (input_number <= 0) {
        document.getElementById("result").innerHTML = "V e r y g o o d";
        return;
    };

    for (let i = 1; i <= 12; i++) {
        let Mother = input_number * i;
        text_mother += input_number + " x " + i + " = " + Mother + "<br>";
    }
    document.getElementById("result").innerHTML = text_mother;
}
/* End แม่สูตรคูณ */


var acc = document.getElementsByClassName("accordion"); //mnet != ment
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/* End แม่สูตรคูณ */

/* เปิดแถบข้างๆ */
function openNav() {
    document.getElementsByClassName("content-side")[0].style.width = "250px";
    document.getElementsByClassName("opa-side")[0].style.display = "block";
    document.getElementsByClassName("opa-side")[0].style.opacity = "0.4";
    document.body.style.marginLeft = "250px"
}

function closeNav() {
    document.getElementsByClassName("content-side")[0].style.width = "0";
    document.getElementsByClassName("opa-side")[0].style.display = "none";
    document.getElementsByClassName("opa-side")[0].style.opacity = "0";
    document.body.style.marginLeft = "0";
}