// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, "Adrian", 1, true, "Adrian", { nombre: 'Adrian' }, 1, [1, 2, 3], 1, new Date()
// ':)' CONCAT
);
console.log(numeros$);
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':c');
        }
    });
};
const promesita$ = rxjs.from(promesita(true));
const promesitaNoOk$ = rxjs.from(promesita(false));
numeros$
    .pipe(concat(promesita$), // RESOLVE
concat(promesitaNoOk$))
    .pipe(distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
promesita$
    .subscribe((ok) => {
    console.log('En promesita', ok);
}, (error) => {
    console.log('Error en promesita', error);
}, () => {
    console.log('Completado');
});
