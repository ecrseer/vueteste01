console.log('loading')
let d=32;

var app = new Vue({
    el:"#vuehome",
    data:{
        carros:0
    },
    created: function () {
        axios.get('./listacarros.json').then(
            (resposta) => {
                this.carros = resposta.data.beldades;
                console.log(this.carros);

            });
    }

});