const selectElement = document.querySelector("#swap");
const body = document.querySelector("body");
let value;

selectElement.addEventListener("change", (event) => {
    value=event.target.value;
    console.log(value);
    if(value=="Dark"){
    console.log("its dark");
    style("black","white");
    document.getElementById("logo").src = "images/byui-logo-white.png";
    }
    if(value=="Light")
    {
    console.log("its light");
    style("white","black");
    document.getElementById("logo").src = "images/byui-logo-blue.webp";
    }
});

function style(color,color2)
{
    document.body.style.backgroundColor = color;
    document.getElementById("text").style.color = color2;
    }
