document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    let score = 0;
    const total = 5;

    // Q1: radio exact match
    const q1 = form.elements['q1'].value;
    if (q1 === '5') score++;

    // Q2: checkboxes (correct: 2 and 3, not 4)
    const q2Nodes = form.querySelectorAll('input[name="q2"]:checked');
    const selectedQ2 = Array.from(q2Nodes).map(n => n.value).sort();
    const correctQ2 = ['2','3'];
    if (selectedQ2.length === correctQ2.length && selectedQ2.every((v,i) => v === correctQ2[i])) score++;

    // Q3: radio (Earth orbits Sun)
    if (form.elements['q3'].value === 'b') score++;

    // Q4: text (case-insensitive match for "Paris")
    const q4 = (form.elements['q4'].value || '').trim().toLowerCase();
    if (q4 === 'paris') score++;

    // Q5: radio (true)
    if (form.elements['q5'].value === 'true') score++;

    // Provide feedback
    const pct = Math.round((score / total) * 100);
    const output = document.getElementById('output');
    output.style.display = 'block';
    output.innerHTML = '<strong>Score:</strong> ' + score + ' / ' + total +
    ' (' + pct + '%)';

    // Optional: give brief feedback message
    let msg = '';
    if (pct === 100) msg = ' — Perfect!';
    else if (pct >= 80) msg = ' — Great job!';
    else if (pct >= 50) msg = ' — Not bad, review the missed answers.';
    else msg = ' — Keep practicing.';
    output.innerHTML += msg;
});




// function checkRes(test){
//     var result = 0;
//     if (test.question1[1].checked) {
//         result++;
//     }
//     if (test.question2[0].checked) {
//         result++;
//     }
//     if (test.question3[0].checked) {
//         result++;
//     }
//     if (test.question4[1].checked) {
//         result++;
//     }
//     if (document.getElementById('amount').valueAsNumber == 8) {
//         result++;
//     }
//     test.display.value = "Result:" + result;
// }
