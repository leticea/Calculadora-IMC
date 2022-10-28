function calculate() {

    let height = (document.getElementById("height").value) / 100;
    let weight = document.getElementById("weight").value;

    const imc = weight / height ** 2;

    if (imc < 18.5) {

        window.alert("Abaixo do peso.");
    } 

    if (imc > 18.5 && imc < 24.9) {

        window.alert("Peso normal.");
    } 

    if (imc > 25 && imc < 29) {

        window.alert("Sobrepeso.");
    }

    if (imc > 30 && imc < 40) {
        window.alert("Obesidade.")
    }

    if (imc > 40) {
        window.alert("Obesidade grave.")
    }
}


