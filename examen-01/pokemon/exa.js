const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const findType = (characters, type) => {
    console.log('\nBusque los tipos de "' + type + '" en el arreglo `people.json`');
    const types = characters.map((character) => {
        return character[type];
    });
    const answer = types
        .filter((value, index, array) => array.indexOf(value) === index)
        .map(value => {
        return { [type]: value };
    });
    console.log(answer);
    return types;
};
