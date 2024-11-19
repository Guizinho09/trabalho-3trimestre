import {getcCSS, tickconfig} from "./common.js"
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickcongig = {
    color: getcCSS('--primary-color),
    size: 16,
    family: getCSS('--font')
}
function criarGrafico(data, layout){
    const grafico = document.createElement ('div')
    grafico.className = 'grafico'
    document.getElementByd('graficos-container')
    .appendchild(grafico)
    Plotly.newPlot(grafico,data, layout)
}
function incluirTexto(texto){
    const contaiter = document.getElementById
    ('graficos-container');
    const paragrafo = document.
    paragrafo.classlist.add('grafico-container_texto')
    paragrafo.innHTML = txto
    container.appendChild(paragrafo)
}
export {getcCSS,tickconfig,criarGrafico,incluirTexto}
