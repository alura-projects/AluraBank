class Negociacao {

    _data;
    _quantidade;
    _valor;

    constructor ( data, quantidade, valor ) {

        // if(!data){
        //     throw new Error('Date cannot be empty')
        // }

        // if(!quantidade){
        //     throw new Error('Quantity cannot be empty')
        // }

        // if(!valor){
        //     throw new Error('Value cannot be empty')
        // }

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    getData() {
        return this._data
    }

    getQuantidade () {
        return this._quantidade
    }

    getValor() {
        return this._valor
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

}