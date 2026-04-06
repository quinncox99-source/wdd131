const LVL="<b>Level: </b>"
let level=5
const HP="<b>Health:</b>"
let health=100

function levelUp() {
level+=1;
    document.getElementById("level").innerHTML = LVL+level;
}
function attacked() {
    if(health<=0){
        alert("this creature has died")
    }else{
    health-=20;
    document.getElementById("hp").innerHTML = HP+health;
    }
}