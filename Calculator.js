const calc = () => {
    let a = parseInt(document.querySelector('#value1').value);
    let b = parseInt(document.querySelector('#value2').value);
    let oper = document.querySelector('#operator').value;
    let calculate;

    if(oper == 'sum') {
        calculate = a + b;
    } else if (oper == 'res') {
        calculate = a - b;
    } else if (oper == 'div') {
        calculate = a / b;
    } else if (oper == 'mul') {
        calculate = a * b
    }

    document.querySelector('#result').innerHTML = calculate;
}