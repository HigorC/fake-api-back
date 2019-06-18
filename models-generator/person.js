const names = [
    "OLIVIA", "RUBY", "EMILY", "GRACE", "JESSICA", "CHLOE",
    "SOPHIE", "LILY", "AMELIA", "EVIE", "MIA", "ELLA", "CHARLOTTE",
    "LUCY", "MEGAN", "ELLIE", "ISABELLE", "ISABELLA", "HANNAH",
    "KATIE", "AVA", "HOLLY", "SUMMER", "MILLIE", "DAISY", "PHOEBE",
    "FREYA", "ABIGAIL", "POPPY", "ERIN", "EMMA", "MOLLY", "IMOGEN",
    "AMY", "JASMINE", "ISLA", "SCARLETT", "LEAH", "SOPHIA",
    "ELIZABETH", "EVA", "BROOKE", "MATILDA", "CAITLIN", "KEIRA",
    "ALICE", "LOLA", "LILLY", "AMBER", "ISABEL", "JACK", "OLIVER",
    "THOMAS", "HARRY", "JOSHUA", "ALFIE", "CHARLIE", "DANIEL", "JAMES",
    "WILLIAM", "SAMUEL", "GEORGE", "JOSEPH", "LEWIS", "ETHAN", "MOHAMMED",
    "DYLAN", "BENJAMIN", "ALEXANDER", "JACOB", "RYAN", "LIAM", "JAKE", "MAX",
    "LUKE", "TYLER", "CALLUM", "MATTHEW", "JAYDEN", "OSCAR", "ARCHIE", "ADAM",
    "RILEY", "HARVEY", "HARRISON", "LUCAS", "MUHAMMAD", "HENRY", "ISAAC",
    "LEO", "CONNOR", "EDWARD", "FINLEY", "LOGAN", "NOAH", "CAMERON", "ALEX",
    "OWEN", "RHYS", "NATHAN"];

function createPersons(quantity) {
    let id = 0;
    let persons = [];

    while (id != quantity) {
        persons.push({
            id: id++,
            name: getRandomicName(),
            age: getRandomicAge(),
            sex: getRandomicSex()
        });
    }
    
    return quantity > 1 ? persons : persons[0];
}

function getRandomicName() {
    return names[Math.floor((Math.random() * names.length))];
}

function getRandomicSex() {
    return Math.random() >= 0.5 ? "Male" : "Female";
}

function getRandomicAge() {
    return Math.floor((Math.random() * 100) + 1);
}

module.exports = {
    createPersons
}