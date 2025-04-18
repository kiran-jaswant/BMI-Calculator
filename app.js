
let form = document.querySelector("form");

form.addEventListener('submit', function (e) {

    e.preventDefault();


    let h = document.querySelector("#height");
    let w = document.querySelector("#weight");

    let result = document.querySelector(".result");

    let ht = parseInt(h.value);
    let wt = parseInt(w.value);

    if (ht === '' || ht < 0 || isNaN(ht)) {
        result.innerHTML = ' <h5> Please give valid height </h5>';

    } else if (wt === '' || wt < 0 || isNaN(wt)) {
        result.innerHTML = ' <h5> Please give valid weight</h5>';

    } else {

        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);

        result.innerHTML = `<b>${bmi} </b>`;

        const messageDiv = document.createElement('div');
        const img = document.createElement("img");

        let secondpart = document.querySelector("#second-part")

        if (bmi < 18.6) {
            console.log("you are under weight");

            messageDiv.className = 'message';
            messageDiv.innerHTML = '<p>You are underweight.</p><p>Eat more to gain weight</p>';
            img.src = './images/under-weight.avif';
            img.alt = 'Underweight warning image';
            img.className = 'message-image';

            secondpart.appendChild(messageDiv);
            secondpart.appendChild(img);
            secondpart.classList.add('after-second-part');

        } else if (bmi >= 18.6 && bmi <= 24.9) {
            console.log("your weight is normal")

            messageDiv.className = 'message';
            messageDiv.innerHTML = '<p>You are Normal.</p><p>Eat healthy and stay fit</p>';
            img.src = './images/fitt.avif';
            img.alt = 'Fitness image';
            img.className = 'message-image';

            secondpart.appendChild(messageDiv);
            secondpart.appendChild(img);
            secondpart.classList.add('after-second-part');
        } else {
            console.log("you are overweight")

            messageDiv.className = 'message';
            messageDiv.innerHTML = '<p>You are Overweight.</p><p>Eat less to stay fit</p>';
            img.src = './images/over-weight.jpg';
            img.alt = 'Overweight warning image';
            img.className = 'message-image';

            secondpart.appendChild(messageDiv);
            secondpart.appendChild(img);
            secondpart.classList.add('after-second-part');
        }

    }



    1

});