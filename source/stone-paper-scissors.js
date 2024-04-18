$(document).ready(function () {
    $('#msg-won').hide();
    $('#msg-lost').hide();
    $('#msg-draw').hide();
    $('#btn-play-again').hide();
});

function play(choise) {
    const options = ['stone', 'paper', 'scissors'];
    let selected = options[Math.floor(Math.random() * 3)];
    $('#selection').attr('src', `source/images/${selected}.png`);
    if (choise == 'stone') {
        if (selected == 'stone') {
            $('#msg-draw').show();
        }
        else if (selected == 'paper') {
            $('#msg-lost').show();
        }
        else {
            $('#msg-won').show();
        }
    }
    else if (choise == 'paper') {
        if (selected == 'paper') {
            $('#msg-draw').show();
        }
        else if (selected == 'scissors') {
            $('#msg-lost').show();
        }
        else {
            $('#msg-won').show();
        }
    }
    else {
        if (selected == 'scissors') {
            $('#msg-draw').show();
        }
        else if (selected == 'stone') {
            $('#msg-lost').show();
        }
        else {
            $('#msg-won').show();
        }
    }
    $('.c-choise').attr('disabled', true);
    $('#btn-play-again').show();
}

function playAgain(){
    $('#selection').attr('src', '');
    $('.c-choise').attr('disabled', false);
    $('#msg-won').hide();
    $('#msg-lost').hide();
    $('#msg-draw').hide();
    $('#btn-play-again').hide();
}