console.log('javascript carrengando')

// Verifica se o cpf é valido atraves de um regex 
function validacpf(cpf) {
    console.log('cpf.length');
    if (!cpfIsValid(cpf)) return false;


    let filterredCPF = '';

    // verifica se o cpf contem apenas numeros e atribui a uma variavel
    // apenas os numeros
    if (cpf.length === 11) {
        filterredCPF = cpf;

    } else {
        filterredCPF = cpf.replace(/[^0-9]/g, '');

    }

    // Numeros separados de digitos
    let numeros = filterredCPF.substring(0, 9);
    const digitos = filterredCPF.substring(9);


    let soma = 0;
    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;

    }


    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validação do primeiro digito
    if (resultado != digitos.charAt(0)) {
        return false;
    }

    soma = 0;
    numeros = filterredCPF.substring(0, 10);

    for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    // Validação do segundo digito
    if (resultado != digitos.charAt(1)) {
        return false;
    } return true;

}

function validacao() {
    console.log('Iniciando validação CPF');

    const cpf = document.getElementById('cpf_digitado').value;
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    const resultadovalidacao = validacpf(cpf);

    if (resultadovalidacao) {

        document.getElementById('success').style.display = 'block';
    }

    if (!resultadovalidacao) {
        document.getElementById('error').style.display = 'block';
    }

}

function cpfIsValid(cpf) {
    const regex = /^\d{3}\.?\d{3}\.?\d{3}[.-]?\d{2}$/;
    const filteredCPF = cpf.match(regex);

    if (filteredCPF) return true;

    return false;
}

