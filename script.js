var valorUte;
var valorAntel;
var greater;
var prom;

function update(){
valorUte = parseFloat(document.getElementById('ute').value);
valorAntel = parseFloat(document.getElementById('antel').value);
greater = Math.max(valorAntel, valorUte);
prom = (valorUte+valorAntel)/2;
}

function quien(){
    if (valorAntel>valorUte){
        user = 'Mahiant a Facu';
    }else{
        user = 'Facu a Mahiant';
    }
}


function calcular(){
    update();
    quien();
    let aPagar = greater - prom;
    document.getElementById('resultado').innerHTML = user +' $'+ aPagar;
}