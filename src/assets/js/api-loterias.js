const apiLoteria = {}


//faz a contagem de acertos do usuario
function contarValoresIguais(cartelaUsuario, ...valoresApi) {
    const setCartelaUsuario = new Set(cartelaUsuario);
    const resultados = [];

    for (const array of valoresApi) {
      const setValoresApi = new Set(array);
      let contador = 0;

      for (const valor of setCartelaUsuario) {
        if (setValoresApi.has(valor)) {
          contador++;
        }
      }
      resultados.push(contador);
    }
    return resultados;
  }

//faz a conexao com a api e retorna os dados no console
apiLoteria.getLoterias = () =>{
    //declaração da url
    const url = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/"
    return fetch(url)
    //pega os dados do json
    .then((response) => response.json())
    //faz a leitura do json e extrai os dados
    .then(data => {
        //percorre todo o json
        data.map((item) => {
            //declara valores do usuario  PROVISORIO
            const cartelaUsuario = ["01","03","07","09","10","12","13","14","15","17","19","20","22","24","25"];
            //declara dados da api
            let array2 = item.dezenas;
            //chama a funcao de contagem de acertos
            const resultados = contarValoresIguais(cartelaUsuario, array2);
            //apresenta os dados no console
            resultados.map((valor) => {
            console.log(`voce acertou ${valor} pontos no concurso${item.concurso}.`);
            })
        })
    })
}