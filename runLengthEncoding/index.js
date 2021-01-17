const string = "AAAAAAAAAAAAABBCCCCDD"

function runLengthEncoding(string) {
    var characters = [];
    var currentRun = 1;
    for(var i = 1; i < string.length; i++) {
        var currentCharacter = string[i];
        var previousCharacter = string[i - 1];
        if (currentCharacter !== previousCharacter || currentRun == 9) {
            characters.push(currentRun.toString());
            characters.push(previousCharacter);
            currentRun = 0
        }
        currentRun += 1;
    }
    
    characters.push(currentRun.toString());
    characters.push(string[string.length - 1])
    console.log('characters', characters.join(''))
    return characters.join('')
}

runLengthEncoding(string);