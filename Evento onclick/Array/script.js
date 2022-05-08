/* let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];
console.log(carros[0]);
document.write(carros[7]);

let ingredientes = [
    ['uva', 'pera', 'maça'],
    ['arroz', 'macarrão']
];
console.log(ingredientes[1][0]); */

/* acessar um veiculo por propriedades */

/* let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado:false,
    ligar: function () {
        this.ligado = true;
        console.log('Ligando o ' + this.marca+' ' + this.modelo);
        console.log('VRUM VRUM')
    },
    acelerar: function () {
        if(this.ligado == true){
            console.log("RumRumRumRumRum")
        } else {
            console.log(this.marca +' '+ this.modelo+' '+" não esta ligado");
        }
    }
};

console.log('Modelo: '+carro.marca);

carro.ligar();
carro.acelerar(); */
/* um array e dentro dele um objeto */
let carro = [
    {nome: 'Fiat', modelo:'Palio'},
    {nome: 'Fiat', modelo:'Uno'},
    {nome: 'Toyota', modelo:'Corolla'},
    {nome: 'Ferrari', modelo:'Spaider'}
];
console.log(carro[2].nome);