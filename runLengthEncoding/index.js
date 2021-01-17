const string = "AAAAAAAAAAAAABBCCCCDD"

function runLengthEncoding(string) {
    var currentRun = 1;
    var characters = [];
    var encodedString = '';
    for(var i = 1; i < string.length; i++) {
        var currentCharacter = string[i];
        var previousCharacter = string[i - 1];
        if (currentCharacter !== previousCharacter || currentRun == 9) {
            characters.push(currentRun.toString());
            characters.push(previousCharacter);
            currentRun = 0;

        } 
        currentRun += 1;
    }
    characters.push(currentRun.toString());
    characters.push(string[string.length - 1])
    return characters.join('')
  }
  
  runLengthEncoding(string);