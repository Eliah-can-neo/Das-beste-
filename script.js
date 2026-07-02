let score = 0;
let used = {};

function answer(q, correct){
if(used[q]) return;
used[q] = true;

if(correct){
score++;
document.getElementById("r"+q).innerText = "✔ Richtig";
}else{
document.getElementById("r"+q).innerText = "✖ Falsch";
}

update();
}

function update(){
let text = "Ergebnis: " + score + " / 3 ";

if(score === 3){
text += "🏆 Sehr gut!";
}else if(score === 2){
text += "👍 Gut!";
}else{
text += "📚 Lernen!";
}

document.getElementById("result").innerText = text;
}

function restart(){
score = 0;
used = {};
document.getElementById("result").innerText = "";

for(let i=1;i<=3;i++){
document.getElementById("r"+i).innerText = "";
}
}

window.addEventListener("scroll", ()=>{
document.querySelectorAll(".card").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
});
