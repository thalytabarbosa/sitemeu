function final() {
    var nome = document.getElementById('digite').value;
    var total = 0;

    var perfumeFamous = document.getElementById('perfumeFamous');
    var perfumeParis = document.getElementById('perfumeParis');
    var perfumeRihanna = document.getElementById('perfumeRihanna');
    var perfumeFashion = document.getElementById('perfumeFashion');

    if (perfumeFamous.checked) total += parseFloat(perfumeFamous.value);
    if (perfumeParis.checked) total += parseFloat(perfumeParis.value);
    if (perfumeRihanna.checked) total += parseFloat(perfumeRihanna.value);
    if (perfumeFashion.checked) total += parseFloat(perfumeFashion.value);

    alert('Agradecemos pela sua compra, ' + nome + '! O total é R$' + total.toFixed(2) + '. Em até 15 dias o produto estará em sua casa.');
}
function reiniciar() {
    window.location.href = window.location.href;
}