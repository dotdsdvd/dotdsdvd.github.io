function checkRes(test){
    var result = 0;
    if (test.question1[1].checked) {
        result++;
    }
    if (test.question2[0].checked) {
        result++;
    }
    if (test.question3[0].checked) {
        result++;
    }
    if (test.question4[1].checked) {
        result++;
    }
    if (document.getElementById('amount').valueAsNumber == 8) {
        result++;
    }
    test.display.value = "Result:" + result;
}
