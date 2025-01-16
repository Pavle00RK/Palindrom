let dugme = document.getElementById("Dugme");
let input = document.getElementById("Input");

dugme.addEventListener("click", ()=>{
    if (input.value !== "") {
        let unos = input.value
        let nizUnosa = unos.split("");
        let obrnutoNiz = nizUnosa.reverse()
        let obrnutUnos = obrnutoNiz.join("")

        if (unos === obrnutUnos) {
            alert("Uneli ste palindrom!")
        } else {
            alert("Nije unet palindrom")
        }
    } else { 
        alert("Nista niste uneli");
    }
})