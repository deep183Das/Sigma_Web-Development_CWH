/*
  Business Name Generator (don't use arrays)
    Create a business name generator by combining list of adjectives and shop name and word

    Adjectives : 
        Crazy
        Amazing
        Fire
    Shop Name :
        Engine
        Foods
        Garments
    Another Word :
        Bros
        Limited
        Hub
    
    (solved by me:)
*/
const Adjectives = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

const Shop_Name = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

const Third_Word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

function word_generator(obj_name) {
    let r = Math.random();

    if(r <= 0.3) {
        return obj_name[1];
    }
    else if(r > 0.3 && r <= 0.6) {
        return obj_name[2];
    }
    else {
        return obj_name[3];
    }
}

let b_name = word_generator(Adjectives).concat(" ", word_generator(Shop_Name), " ", word_generator(Third_Word));

console.log(`The name of the Business will be "${b_name}"`);
