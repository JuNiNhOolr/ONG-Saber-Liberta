document.addEventListener('DOMContentLoaded', function() {

    // CPF: 000.000.000-00
    const cpfInput = document.querySelector('#cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value.slice(0, 14);
        });
    }

    // Telefone: (00) 00000-0000
    const telefoneInput = document.querySelector('#telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value.slice(0, 15);
        });
    }

    // CEP: 00000-000
    const cepInput = document.querySelector('#cep');
    if (cepInput) {
        cepInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value.slice(0, 9);
        });
    }


    const valorRadios = document.querySelectorAll('input[name="valor_doacao"]');
    const customValorInput = document.querySelector('#valor_customizado');

    if (valorRadios.length > 0 && customValorInput) {

        customValorInput.disabled = true;

        valorRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'outro') {
                    customValorInput.disabled = false;
                    customValorInput.focus();
                } else {
                    customValorInput.disabled = true;
                    customValorInput.value = ''; 
                }
            });
        });
    }

});

