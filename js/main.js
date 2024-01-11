$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                reuired: true
            },
            cep: {
                required: true
            },
        },
        submitHandler: function(form) {
            form.submit();
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        }
    );
});