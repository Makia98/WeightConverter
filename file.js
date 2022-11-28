let lbRef = document.getElementById("pound");
let kgRef = document.getElementById("kilogram");


let kilogramToPound = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.20462262).toFixed(5);
};

let poundToKilogram = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.20462262).toFixed(5);
}

kgRef.addEventListener("input", kilogramToPound);
lbRef.addEventListener("input", poundToKilogram);