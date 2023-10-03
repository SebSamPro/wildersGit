const theWilders {
    ("Julien", "Cyril", "Seb", "PA")
}

function displayWilders() {
    console.log("Voici les prénoms des wilders : ");
    for (let i = 0; i < theWilders.length; i++) { console.log(`${theWilders[i]}`) }
}

module.exports = {
    theWilders
}