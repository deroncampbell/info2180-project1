/* Add your JavaScript to this file */
window.onload = function(){
    const form = document.forms[0];

    form.onsubmit = function(e){

        var result = document.getElementById('email');
        alert("FORM SUBMITTED!");
    };

}