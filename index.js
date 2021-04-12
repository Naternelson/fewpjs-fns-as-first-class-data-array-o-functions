function getPhrase(phrase){
    console.log(phrase);
    return phrase;
}

function wakeDog(name, breed){
    let phrase = getPhrase(`Wake ${name} the ${breed}`);
    return phrase;
}
function leashDog(name, breed){
    let phrase = `Leash ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}
function walkToPark(name, breed){
    let phrase = `Walk to the park with ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}
function throwFrisbee(name, breed){
    let phrase = `Throw the frisbee for ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}
function walkHome(name, breed){
    let phrase = getPhrase(`Walk home with ${name} the ${breed}`) ;
    return phrase;
}
function unleashDog(name, breed){
    let phrase = getPhrase(`Unleash ${name} the ${breed}`) ;
    return phrase
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(name, breed){
    let results = []
    routine.forEach(function(f) {
        results.push(f(name, breed));
    })
    return results
}