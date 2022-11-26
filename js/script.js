// media
let full = window.matchMedia('(min-width: 801px)'),
    short = window.matchMedia('(max-width: 800px)');
function open(full) {
  if (full.matches) {
    document.getElementById('box').setAttribute('checked', true);
    document.getElementById('box').disabled = true;

  }
}
function close(short) {
  if (short.matches) {
    document.getElementById('box').disabled = false;
    document.getElementById('box').style.top = '-30px';
    document.getElementById('box').style.left = '-15px';
    document.getElementById('menu').style.backgroundColor = '#3e0044';
    document.getElementById('menu').style.paddingTop = '50px';
    document.getElementsByClassName('.container-ind')[0].style.height = 'calc(80% - 100px)';
  }
}
open(full);
close(short);

//reserves
function page(){
  let usd = document.getElementById('radio-1'),
      eur = document.getElementById('radio-2'),
      uah = document.getElementById('radio-3'),
      rub = document.getElementById('radio-4');
  if (usd.checked){
    document.getElementById('amount1').innerHTML = '2 101 025';
    document.getElementById('amount2').innerHTML = '103 210';
    document.getElementById('amount3').innerHTML = '11 025';

    document.getElementById('visa').style.display = '';
    document.getElementById('qiwi').style.display = '';
    document.getElementById('payeer').style.display = 'none';
    document.getElementById('master').style.display = '';
  }
  if (uah.checked){
    document.getElementById('amount1').innerHTML = '996 540';
    document.getElementById('amount2').innerHTML = '591 632';

    document.getElementById('visa').style.display = '';
    document.getElementById('qiwi').style.display = 'none';
    document.getElementById('payeer').style.display = 'none';
    document.getElementById('master').style.display = '';
  }
  if (eur.checked){
    document.getElementById('amount2').innerHTML = '213 807';
    document.getElementById('amount4').innerHTML = '53 860';

    document.getElementById('visa').style.display = 'none';
    document.getElementById('qiwi').style.display = 'none';
    document.getElementById('payeer').style.display = '';
    document.getElementById('master').style.display = '';
  }
  if (rub.checked){
    document.getElementById('amount2').innerHTML = '1 005 360';
    document.getElementById('amount3').innerHTML = '903 245';
    document.getElementById('amount4').innerHTML = '78 965';

    document.getElementById('visa').style.display = 'none';
    document.getElementById('qiwi').style.display = '';
    document.getElementById('payeer').style.display = '';
    document.getElementById('master').style.display = '';
  }
}