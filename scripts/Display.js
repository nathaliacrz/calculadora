class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAtual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacao = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.sinais = {
            somar: '+',
            dividir: '%',
            multiplicar: 'x',
            subtrair: '-', 
        };
    }

    apagar() {
        this.valorAtual = this.valorAtual.toString().slice(0,-1);
        this.mostrarValores();
    }

    apagarTudo() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperacao = undefined;
        this.mostrarValores();
    }

    computar(tipo) {
        this.tipoOperacao !== 'igual' && this.calcular();
        this.tipoOperacao = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.mostrarValores();
    }

    adicionarNumero(numero){
        if(numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.mostrarValores();
    }

    mostrarValores(){
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.sinais[this.tipoOperacao] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if( isNaN(valorAtual)  || isNaN(valorAnterior) ) return
        this.valorAtual = this.calculador[this.tipoOperacao](valorAnterior, valorAtual);
    }
}