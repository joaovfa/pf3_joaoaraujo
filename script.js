const calcular = document.getElementById('calcular');

function pmt () {
    const renda = document.getElementById('renda').value;
    const valor = document.getElementById('valor').value;
    const entrada = document.getElementById('entrada').value;
    const i = (document.getElementById('taxa').value)/100;
    const n = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (valor !== '' && i !== '' && n !== '' && renda !== ''  && entrada !== '') 
    {
        const vp = valor - entrada;
        const prestacao = ((((1+i)**n)*i*vp)/(((1+i)**n)-1)).toFixed(2);
        const final = (renda * 0.3)
        if (prestacao > final)
        {
            resultado.textContent = `O valor da prestação que é de ${prestacao} e não pode ultrapassar 30% (${final}) da sua renda, que é de ${renda}`
        }
        else
        {
            resultado.textContent = `Compra realizada com sucesso! O valor da prestação será de ${prestacao}`
        }

    }
    else
    {
        resultado.textContent = 'Para calcular o sua renda, preencha todos os campos.';
    }

}
calcular.addEventListener('click', pmt);