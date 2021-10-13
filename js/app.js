(function() {
    const btn = document.querySelector('.btn');
    const img = document.querySelector('img')

    btn.addEventListener('click', gerarAjax);

    function gerarAjax() {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://api.thecatapi.com/v1/images/search');

        ajax.onprogress = function() {
            btn.textContent = 'Gerando...'

        }

        ajax.onload = function() {
            if (this.status === 200) {
                const url = JSON.parse(ajax.responseText);
                img.src = url[0].url;
                setTimeout(function() {

                    btn.textContent = 'Gerar outro gato'
                }, 1000)

            }
        }


        ajax.send(null);


    }
    gerarAjax();
})()