
'use strict'

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();

const showBtn = document.querySelector("#Show-data-btn");
const showDataAtual = document.querySelector(".show");

const dataAtual = `
    <div class="show">
        DATA ATUAL
    </div>
    ${dia}/${mes}/${ano}`;

showBtn.addEventListener("click", function() {

    showDataAtual.innerHTML = dataAtual;
});

