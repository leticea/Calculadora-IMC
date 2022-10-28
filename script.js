function calculate() {

    let height = (document.getElementById("height").value) / 100;
    let weight = document.getElementById("weight").value;

    const imc = weight / height ** 2;

    let result ="";

    if (imc < 18.5) {

        result = (`${imc}. Está abaixo do peso.`);
    } 

    if (imc > 18.5 && imc < 24.9) {

        result = (`${imc}. Está com o peso normal.`);
    } 

    if (imc > 25 && imc < 29) {

        result = (`${imc}. Está com sobrepeso.`);
    }

    if (imc > 30 && imc < 40) {
        result = (`${imc}. Está com obesidade.`);
    }

    if (imc > 40) {
        result = (`${imc}. Está com obesidade grave.`);
    }

    document.getElementById("text-area").innerText=result;
}
