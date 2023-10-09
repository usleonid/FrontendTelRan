let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
  let responseObj = xhr.response;
  console.log(responseObj.entity.totalAmount); 
  const jackpotAmount = responseObj.entity.totalAmount;
  const el$ = document.getElementById('jackpot');
  el$.style.color = 'yellowgreen';
  el$.style.fontSize = '2rem';
  console.log('Element', el$);
  el$.textContent = '$ ' + numberWithCommas(Math.floor(jackpotAmount));
//   el$.textContent = '$ ' + new Intl.NumberFormat().format(Math.floor(jackpotAmount));

};

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}