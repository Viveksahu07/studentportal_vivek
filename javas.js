function showPage(pageId, element) {
    // Switch pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    // Active menu highlight
    document.querySelectorAll('.sidebar li').forEach(li => {
        li.classList.remove('active');
    });
    element.classList.add('active');
}

// Quiz logic
function checkAnswer() {
    let ans = document.querySelector('input[name="q"]:checked');

    if (!ans) {
        alert("Please select an answer");
        return;
    }

    let result = document.getElementById("result");

    if (ans.value == "20") {
        result.innerText = "✅ Correct Answer!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Wrong Answer!";
        result.style.color = "red";
    }
}
