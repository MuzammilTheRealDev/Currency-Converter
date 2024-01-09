// let key = 'cur_live_CLgSnnVfuiDiUJCb4YIvnDHtmeU607NY1elmjpPZ';


let populate = async function(value,currency){
    let myString = "";
    let api = `https://api.currencyapi.com/v3/latest?apikey=cur_live_CLgSnnVfuiDiUJCb4YIvnDHtmeU607NY1elmjpPZ&base_currency=` + currency
    let response = await fetch(api);
    let result = await response.json();
        document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(result["data"])) {
   myString += `<tr>
                    <td>${key}</td>
                    <td>${result['data'][key]['code']}</td>
                    <td>${Math.round(result['data'][key]['value'] * value)}</td>
                </tr>` 
                 
        }
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = myString;
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(e){
    e.preventDefault();
    let value = parseInt(document.querySelector("input[name='quantity']").value);
    let currency = document.querySelector("select[name = 'currency']").value;
    populate(value,currency);
})

   
