        function resultadoCep(ValorCep) {
            for (let campo in ValorCep) {
                if (document.querySelector(`#${campo}`)){
                    document.querySelector(`#${campo}`).value = ValorCep[campo];
                }
            }
        }

        let dadosCep = async function (cep){
            let url = `https://viacep.com.br/ws/${cep}/json`;
            try{
                let dadosFetch = await fetch(url);
                let dadosJson = await dadosFetch.json();
                resultadoCep(dadosJson);
            } catch(error) {
                alert (error)
            }

        }
        /*dadosCep('86810000')*/
        const btnbuscar = document.querySelector('#btnbuscar');
        const cep = document.querySelector('#txtcep');

        btnbuscar.addEventListener('click', function(){
            dadosCep(cep.value)
        })



    