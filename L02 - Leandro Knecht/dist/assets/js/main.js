// überall sollte " anstatt " benutzt werden
// "subject" ist in der einzahl, die anderen Arrays in der Mehrzahl
var subject = ['Hyur', 'Elezen', 'Lalafell', "Miqo'te",
    'Roegadyn', 'Au Ra', 'Viera', 'Hrothgar'];
var verbs = ['lieben', 'hassen', 'können',
    'zerstören', 'kämpfen', 'lachen'];
var objects = ['Lebensmittel', 'die Ultima-Weapon',
    'Gridania', 'Nero', 'Midgardsormr', 'Gegner'];
function randomRiddle() {
    for (var i = 0; i < 5; i++) {
        // sehr lange Zeile. Lässt sich nur schwer lesen und sollte übersichtlich aufgespaltet werden
        console.log(subject.splice(Math.floor(Math.random() * subject.length), 1)[0]
            + verbs.splice(Math.floor(Math.random() * verbs.length), 1)[0]
            + objects.splice(Math.floor(Math.random() * objects.length), 1)[0], '.', '\n');
    }
}
randomRiddle();
