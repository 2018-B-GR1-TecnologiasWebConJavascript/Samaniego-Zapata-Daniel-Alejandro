declare var require: any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;

const promesa() => {
    return new Promise(
        (resolve, reject) => {
            if(){
                resolve ('ok');
            }else {
                reject ('mal');
            }
        }

    );
   // console.log(promesa);
}

console.log(promesa());
//const promesaObservable = rxjs.from(promesa(true));
