/* let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];
console.log(carros[0]);
document.write(carros[7]);

let ingredientes = [
    ['uva', 'pera', 'maça'],
    ['arroz', 'macarrão']
];
console.log(ingredientes[1][0]); */

let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function () {
        console.log('VRUM VRUM')
    },
    acelerar: function () {
        console.log("RumRumRumRumRum")
    }
};
console.log(carro['marca']);
console.log(carro.marca);
console.log('peso:'+carro.peso);
carro.ligar();
carro.acelerar();