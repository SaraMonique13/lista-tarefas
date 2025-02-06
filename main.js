$(document).ready(function (){

    $('#add').click(function(){
        $('form').slideDown()
    })

    $('#cadastro').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
       e.preventeDefault()

       const novoEndereço = $('#iname').val()
       const novoItem = $('<li style = "display:none"></li>')



       $(novoItem).appendTo('ul')

    })
})