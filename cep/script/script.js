$(document).ready(function(){

    $("#cbPais").focusout(function(){
        var pais = $(this).val();

        if (pais !== "Selecione um País") {
            if(validacep.test(cep)) {
                $("#rua").val("...");
                $("#complemento").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#estado").val("...");

                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        if (!("erro" in data)) {
                            $("#rua").val(data.logradouro);
                            $("#complemento").val(data.complemento);
                            $("#bairro").val(data.bairro);
                            $("#cidade").val(data.localidade);
                            $("#estado").val(data.uf);

                            $("#rua, #complemento, #bairro, #cidade, #estado").prop("disabled", false);
                        }
                        else {
                            alert("CEP não encontrado.");
                        }
                    })
                    .catch(() => alert("Erro ao consultar o CEP."));
            }
            else {
                alert("Formato de CEP inválido.");
            }
        }
    });
});