// Page switch
function showPage(page, el){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(page).classList.add('active');

    document.querySelectorAll('.sidebar li').forEach(li=>li.classList.remove('active'));
    el.classList.add('active');
}

// Quiz Data
const quiz = [
    {q:"5 + 5 = ?", a:["10","9","8"], c:0},
    {q:"10 x 2 = ?", a:["20","10","15"], c:0},
    {q:"15 - 5 = ?", a:["5","10","15"], c:1}
];

let index=0, score=0;

// Load Question
function loadQ(){
    let q=quiz[index];
    document.getElementById("question").innerText=q.q;

    let opt="";
    q.a.forEach((o,i)=>{
        opt+=`<button onclick="check(${i})">${o}</button>`;
    });

    document.getElementById("options").innerHTML=opt;

    document.getElementById("progressBar").style.width=
        ((index/quiz.length)*100)+"%";
}
loadQ();

// Check Answer
function check(i){
    if(i===quiz[index].c) score++;
}

// Next
function nextQuestion(){
    index++;

    if(index<quiz.length){
        loadQ();
    }else{
        document.getElementById("quiz").innerHTML=
            `<h2>Your Score: ${score}/${quiz.length}</h2>`;
    }
}
