function getRandom(max) {
    return Math.floor(Math.random() * ((max + 1) - 0))
}

function generate() {
    name = document.getElementById("name").value
    gender = document.getElementById("gender").value
    type = document.getElementById("type").value
    curses = ["feio", "fraco", "burro", "acéfalo"]
    compliments = ["bonito", "forte", "esperto", "perceverante", "engraçado", "divertido", "inteligente", "amigavel", "gentil"]

    if (type == "Elogio") {
        adjectives = compliments
    } else {
        adjectives = curses
    }

    maxPosition = adjectives.length - 1
    randomPosition = getRandom(maxPosition)
    adjective = adjectives[randomPosition]

    lastLetter = adjective[adjective.length - 1]
    if (lastLetter == "a" || lastLetter == "o") {

        if (gender == "Feminino") {
            letter = "a"
        } else {
            letter = "o"
        }

        genderLessAdjective = adjective.substring(0, adjective.length - 1)

        fixedAdjective = genderLessAdjective + letter

    } else {
        fixedAdjective = adjective
    }

    phrase = name + " você é " + fixedAdjective
    document.getElementById("phrase").innerHTML = phrase

}