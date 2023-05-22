const btnRed = document.getElementById('btn-red');
// 

let compteur = 0;
console.log(compteur, "compteur au debut");

btnRed.addEventListener('click', function () {
    console.log('click');

    compteur = compteur + 1;
    console.log(compteur, "compteur after");
}
)