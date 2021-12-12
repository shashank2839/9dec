let multiply = function(){

    let input_1 = document.getElementById('input_1').value;
    let input_2 = document.getElementById('input_2').value;
    let input_3 = document.getElementById('input_3').value;
    // alert("clicked");
    let calc = `The Result is: ${input_1*input_2*input_3}`;
    let result = document.getElementById('result');
    result.innerText = calc;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', multiply);