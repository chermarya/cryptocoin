/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropMenu1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function dropMenu2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// selector


let Bitcoin = {
    'Bitcoin':  1,
    'Tether':   17656.8297,
    'Etherium': 14.7232,
    'Cardano':  56167.9808,
    'Solana':   1250.7337,
};
let Tether = {
    'Bitcoin':  0.0000648527,
    'Tether':   1,
    'Etherium': 0.000893236,
    'Cardano':  3.40153,
    'Solana':   0.0760449,
};
let Etherium = {
    'Bitcoin':  0.0788162,
    'Tether':   1307.1334,
    'Etherium': 1,
    'Cardano':  4087.4856,
    'Solana':   88.3392,
};
let Cardano = {
    'Bitcoin':  0.0000206296,
    'Tether':   0.342079    ,
    'Etherium': 0.000280126,
    'Cardano':  1,
    'Solana':   0.0231762,
};
let Solana = {
    'Bitcoin':  0.000950695,
    'Tether':   15.7718,
    'Etherium': 0.0129149,
    'Cardano':  49.2521,
    'Solana':   1,
};

function counting(){
    let num1 = eval(document.getElementById('name_give1').innerHTML),
        num2 = document.getElementById('name_give2').innerHTML,
        mon_give = document.getElementById('num_give').value,
        sum = num1[num2] * mon_give;
        document.getElementById('num_receive').value = sum;
}

function bitcoin1(){
    document.getElementById('name_give1').innerHTML = "Bitcoin";
    document.getElementById('curr1').src = './img/bit.png';
    counting();
}
function tether1(){
    document.getElementById('name_give1').innerHTML = "Tether";
    document.getElementById('curr1').src = './img/usdt.png';
    counting();
}
function etherium1(){
    document.getElementById('name_give1').innerHTML = "Etherium";
    document.getElementById('curr1').src = './img/eth.png';
    counting();
}
function cardano1(){
    document.getElementById('name_give1').innerHTML = "Cardano";
    document.getElementById('curr1').src = './img/ada.png';
    counting();
}
function solana1(){
    document.getElementById('name_give1').innerHTML = "Solana";
    document.getElementById('curr1').src = './img/sol.png';
    counting();
}



function bitcoin2(){
    document.getElementById('name_give2').innerHTML = "Bitcoin";
    document.getElementById('curr2').src = './img/bit.png';
    counting();
}
function tether2(){
    document.getElementById('name_give2').innerHTML = "Tether";
    document.getElementById('curr2').src = './img/usdt.png';
    counting();
}
function etherium2(){
    document.getElementById('name_give2').innerHTML = "Etherium";
    document.getElementById('curr2').src = './img/eth.png';
    counting();
}
function cardano2(){
    document.getElementById('name_give2').innerHTML = "Cardano";
    document.getElementById('curr2').src = './img/ada.png';
    counting();
}
function solana2(){
    document.getElementById('name_give2').innerHTML = "Solana";
    document.getElementById('curr2').src = './img/sol.png';
    counting();
}

// send

function load(){
    let give = localStorage.getItem('give'),
        receive = localStorage.getItem('receive'),
        give_curr = localStorage.getItem('give_curr'),
        receive_curr = localStorage.getItem('receive_curr'),
        email = localStorage.getItem('email'),
        wallet = localStorage.getItem('wallet'),
        numb = localStorage.getItem('numb'),
        rate = localStorage.getItem('rate');
    let Data = new Date(),
        Year = Data.getFullYear(),
        Month = Data.getMonth() + 1,
        Day = Data.getDate(),
        Hour = Data.getHours(),
        Minutes = Data.getMinutes(),
        Seconds = Data.getSeconds();

    document.getElementById('request_id').innerHTML = 'ID: ' + numb;
    document.getElementById('time').innerHTML = Year + '-' + Month + '-' + Day + ' ' + Hour + ':' + Minutes + ':' + Seconds;
    document.getElementById('sum_give').innerHTML = give;
    document.getElementById('rate').innerHTML = rate;
    document.getElementById('sum_receive').innerHTML = receive;
    document.getElementById('curr_give').innerHTML = give_curr;
    document.getElementById('curr_receive').innerHTML = receive_curr;
    document.getElementById('wal').innerHTML = wallet;
    document.getElementById('mail').innerHTML = email;
}

function save(){
    localStorage.setItem('receive', document.getElementById('num_receive').value);
    localStorage.setItem('give_curr', document.getElementById('name_give1').innerHTML);
    localStorage.setItem('receive_curr', document.getElementById('name_give2').innerHTML);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('wallet', document.getElementById('wallet').value);
    localStorage.setItem('numb', Math.round(Math.random() * (9999 - 1000) + 1000));
    let num1 = eval(document.getElementById('name_give1').innerHTML),
        num2 = document.getElementById('name_give2').innerHTML;
    localStorage.setItem('rate', num1[num2]);
}

function valid(){
  localStorage.clear();
  if (document.getElementById('email').value === ''){document.getElementById('email').style.boxShadow = '0 0 15px red';}
  if (document.getElementById('wallet').value === ''){document.getElementById('wallet').style.boxShadow = '0 0 15px red';}
  if (document.getElementById('email').value != ''){document.getElementById('email').style.boxShadow = 'none';}
  if (document.getElementById('wallet').value != ''){document.getElementById('wallet').style.boxShadow = 'none';}
  localStorage.setItem('give', document.getElementById('num_give').value);
  if (document.getElementById('email').value != '' && document.getElementById('wallet').value != ''){
    save(); 
    document.location.href = './pages/request.html';}
}