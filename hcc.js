function calc(){
    var k1, k2, result;
    k1 = document.getElementById('k1').value;
    k2 = document.getElementById('k2').value;
    result = Math.sqrt(k1*k1+k2*k2);
    result = result.toFixed(2);
    document.getElementById("output").textContent='Довжина Гіпотенузи: ' + result;
}
