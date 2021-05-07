function createKeyboardListener(game) {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);

    function handleKeydown(event) {
        const keyPressed = event.key;
        game.changeKeypress(keyPressed, true);
    }

    function handleKeyup(event) {
        const keyUp = event.key;
        game.changeKeypress(keyUp, false);
    }
}