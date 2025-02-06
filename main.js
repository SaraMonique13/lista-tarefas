$(document).ready(function () {

  
    $('#add').click(function () {
        $('form').slideDown();
    });

    
    $('#cadastro').click(function () {
        $('form').slideUp();
    });

   
    $('form').on('submit', function (e) {
        e.preventDefault();

       
        const novoEndereco = $('#iname').val().trim();

        // Verifica se o campo está vazio para evitar adicionar itens em branco
        if (novoEndereco !== "") {
            // Cria o novo item de lista com efeito fadeIn
            const novoItem = $(`<li>${novoEndereco}</li>`).hide();
            $('ul').append(novoItem);
            novoItem.fadeIn();

            // Limpa o campo de input após adicionar o item
            $('#iname').val("");
        }
    });

    // Adiciona o efeito de riscar os itens ao clicar
    $('ul').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
    });

});
