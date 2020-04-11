function getRandom(max) {
    return Math.floor(Math.random() * ((max + 1) - 0))
}

function getAdjective(type) {
    curses = ["feio", "fraco", "burro", "acéfalo"]
    compliments = ["bonito", "forte", "esperto", "perceverante", "engraçado", "divertido", "inteligente", "amigavel", "gentil"]
    adjectives = type == "Elogio" ? compliments : curses
    maxPosition = adjectives.length - 1
    randomPosition = getRandom(maxPosition)
    return adjectives[randomPosition]
}

function getFixedAdjective(adjective, gender) {
    lastLetter = adjective[adjective.length - 1]
    genderLessAdjective = adjective.substring(0, adjective.length - 1)
    letter = gender == "Feminino" ? "a" : "o"
    return lastLetter == "a" || lastLetter == "o" ? genderLessAdjective + letter : adjective
}

function generate() {
    name = document.getElementById("name").value
    gender = document.getElementById("gender").value
    type = document.getElementById("type").value
    adjective = getFixedAdjective(getAdjective(type), gender)
    document.getElementById("phrase").innerHTML = `${name} você é ${adjective}`
}