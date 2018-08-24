document.addEventListener('DOMContentLoaded', function() {

    let num = document.getElementById('num');
    let btn = document.querySelector('button');
    var result =document.getElementById('result');

    btn.addEventListener('click', function() {
        let wynik="";

        for(let i=0; i<num.value; i++){
            for(let j=0; j<=i; j++) {
                wynik += "*";
            };

            for (let y=i; y<=num.value-2; y++) {
                wynik += "#";
            }


            wynik += '</br>';
        }

        result.innerHTML = wynik;
        
    })
})