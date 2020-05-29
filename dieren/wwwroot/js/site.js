// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function OnReady() {
    console.log('Pagina geladen, DOM klaar voor gebruik.');
}
$(document).ready(OnReady);
function focusFunction() {
    $("#name").focus("#fit");
}
function blurFunction() {
    $("#name").blur("#fit");
}