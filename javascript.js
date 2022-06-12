function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3);
    let play;

    if (randomNum === 0) {
        play = 'Rock';
    } else if (randomNum === 1) {
        play = 'Paper';
    } else {
        play = 'Scissors';
    }

    return play;
}