
let form = document.querySelector("form");

form.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(e)

    let h = document.querySelector("#height");
    let w = document.querySelector("#weight");
    
    let result = document.querySelector(".result");

    let ht = parseInt(h.value);
    let wt = parseInt(w.value);


    const bmi = (wt /((ht*ht)/10000)).toFixed(2);
    
    result.innerHTML = `<b>${bmi} </b>`
    1

});