
declare var require;
const inquirer = require('inquirer');
import { Character, readFile } from './utils';
import { prompt, Answers, Separator, Question, objects } from 'inquirer';
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;

class People {
    abilities: string[] = [];
    base_experience: number;
    game_indices: number;
    height: number;
    held_items: string[] = [];
    id: number;
    is_default: string;
    location_area_encounters: string;
    moves: string[] = [];
    name: string;
    order: number;
    stats: number[] = [];
    types: string[] = [];
    weight: number;
}

const preguntasIngreso = [
    {
        type: 'input',
        name: 'base_experience',
        message: "Cuál es el base_experience",
    },{
        type: 'input',
        name: 'game_indices',
        message: "Cuál es el game_indices",
    },{
        type: 'input',
        name: 'height',
        message: "Cuál es el height",
    },{
        type: 'input',
        name: 'id',
        message: "Cuál es el id",
    },{
        type: 'input',
        name: 'is_default',
        message: "Cuál es el is_default",
    },{
        type: 'input',
        name: 'location_area_encounters',
        message: "Cuál es el location_area_encounters",
    },{
        type: 'input',
        name: 'name',
        message: "Cuál es el name",
    },{
        type: 'input',
        name: 'order',
        message: "Cuál es el order",
    },{
        type: 'input',
        name: 'weight',
        message: "Cuál es el weight",
    }
];

const findType = (characters: Character[], type: string) => {
    console.log(
        '\n1.Busque los tipos de "' + type + '" en el arreglo `data.json`'
    );
    const types = characters.map((character: Character) => {
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

const findType = (characters: Character[], ability: string) => {
    console.log(
        '\n2.Busque los tipos de "' + ability + '" en el arreglo `data.json`'
    );
    const abilities = characters.map((character: Character) => {
        return character[ability];
    });
    const answer = abilities
        .filter((value, index, array) => array.indexOf(value) === index)
        .map(value => {
            return { [ability]: value };
        });
    console.log(answer);
    return abilities;
};

const findType = (characters: Character[], move: string) => {
    console.log(
        '\n3.Busque los tipos de "' + move + '" en el arreglo `data.json`'
    );
    const moves = characters.map((character: Character) => {
        return character[move];
    });
    const answer = moves
        .filter((value, index, array) => array.indexOf(value) === index)
        .map(value => {
            return { [move]: value };
        });
    console.log(answer);
    return moves;
};

const getArrayType = (characters: Character[], type: string) => {
    console.log(
        '\n4.Clasifique a los pokemon por `types`'
    );
    const types = characters
        .map((character: Character) => {
            return character[type];
        })
        // .filter((value, index, array) => array.indexOf(value) === index)
        // .map(value => {
        //     return { [type]: value };
        // });
    console.log(types);
};


const getArrayType = (characters: Character[], ability: string) => {
    console.log(
        '\n5.Clasifique a los pokemon por `abilities` .'
    );
    const abilities = characters
        .map((character: Character) => {
            return character[ability];
        })
        // .filter((value, index, array) => array.indexOf(value) === index)
        // .map(value => {
        //     return { [type]: value };
        // });
    console.log(abilities);
};

const getArrayType = (characters: Character[], move: string) => {
    console.log(
        '\n5.Clasifique a los pokemon por `move` .'
    );
    const moves = characters
        .map((character: Character) => {
            return character[move];
        })
    // .filter((value, index, array) => array.indexOf(value) === index)
    // .map(value => {
    //     return { [type]: value };
    // });
    console.log(moves);
};

const sumStats = (characters: Character[]) => {
    console.log(
        '\n8.Calcular la sumatoria de la propiedad "stats"'
    );
    const sumStats = characters
        .map((character: Character) => {
            let stats = 0;
            if (character.stats !== 'unknown') {
                stats = parseInt(character.mass);
            }
            return stats;
        })
        .reduce((total, value) => {
            return total + value;
        });
    const sum = {
        massTotal: sumStats,
    };
    console.log(sum);
};

const main = async () => {
    const data = await readFile('people.json');
    const characters: Character[] = JSON.parse(data);
    findType(characters, 'types');
    findType(characters, 'abilities');
    findType(characters, 'move');

   //sumMassHeight(characters);
    console.log('\nClasificar a los pokemon por types.');

    console.log('\nClasificar a los pokemon por abilities.');

    console.log('\nClasificar a los pokemon por move.');

};

main();