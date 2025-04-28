





const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




$('#btn').click(function(){
    alert("El correo fue enviado correctamente...")

})

$('#btn2').click(function(){
    alert("añadido a favoritos")

})

$('.hover').hover(
    function() {$(this).css('background-color', 'yellow')},
    function() {$(this).css('background-color', '')},
)

$('h2').dblclick(function(){
    $(this).css('color', 'red')
})

$('#btntoggle1').click(function(){
    $('#contenido1').toggle()
})
$('#btntoggle2').click(function(){
    $('#contenido2').toggle()
})

$('#btntoggle3').click(function(){
    $('#contenido3').toggle()
})

