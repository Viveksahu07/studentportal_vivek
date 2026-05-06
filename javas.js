// Page switch
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    document.getElementById(page).classList.add('active');
}

// Quiz
function checkAnswer() {
    let ans = document.querySelector('input[name="q"]:checked');

    if (!ans) {
        alert("Select an answer!");
        return;
    }

    if (ans.value == "10") {
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = "❌ Wrong!";
    }
}
