const urlParams = new URLSearchParams(window.location.search);

function logAllParameters() {
    urlParams.forEach((value, paramName) => {
        console.log(`${paramName}=${value}`);
    });
}

logAllParameters();

let ID = urlParams.get('ID');
let Name = urlParams.get('Name');
let Surname = urlParams.get('Surname');
let Date = urlParams.get('Date');
let UzmoMin = parseInt(urlParams.get('UzmoMin'), 10);
let UzmoMax = parseInt(urlParams.get('UzmoMax'), 10);
let SamxariMin = parseInt(urlParams.get('SamxariMin'), 10);
let SamxariMax = parseInt(urlParams.get('SamxariMax'), 10);
let SadiliMin = parseInt(urlParams.get('SadiliMin'), 10);
let SadiliMax = parseInt(urlParams.get('SadiliMax'), 10);
let VaxshamiMin = parseInt(urlParams.get('VaxshamiMin'), 10);
let VaxshamiMax = parseInt(urlParams.get('VaxshamiMax'), 10);

document.getElementById("id").value = ID;
document.getElementById("name").value = Name;
document.getElementById("surname").value = Surname;
document.getElementById("date").value = Date;
document.getElementById("uzmo_min").value = UzmoMin;
document.getElementById("uzmo_max").value = UzmoMax;
document.getElementById("samxari_min").value = SamxariMin;
document.getElementById("samxari_max").value = SamxariMax;
document.getElementById("sadili_min").value = SadiliMin;
document.getElementById("sadili_max").value = SadiliMax;
document.getElementById("vaxshami_min").value = VaxshamiMin;
document.getElementById("vaxshami_max").value = VaxshamiMax;

let min_average = (UzmoMin + SamxariMin + SadiliMin + VaxshamiMin) / 4;
let max_average = (UzmoMax + SamxariMax + SadiliMax + VaxshamiMax) / 4;
document.getElementById("average").innerHTML = min_average + " : " + max_average;
