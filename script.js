function calculate() {

    let height = (document.getElementById("height").value) / 100;
    let weight = document.getElementById("weight").value;

    const imc = weight / height ** 2;
    console.log(imc);

}