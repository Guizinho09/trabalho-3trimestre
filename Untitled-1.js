const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.js"
console.log(url);

async function visualizarInformacoesGlobais (){
    
    const res = await fetch(url);
    const dados = await res.json();
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasMundo = (dados.total_pessoas_mundo)/1e9 
    const horas = parseInt (dados.tempo_medio)
    const minutos = math.round ((dados.tempo_medio - horas)* 100)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem 
<span>${pessoasMundo}</span> de pessoas e 
que aproximadamente <span>${pessoasConectadas}</span>
estão conectadas em alguma rede social e passam em media 
<span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.
<br> Isso significa que aproximadamente ${porcentagemConectada}%
de pessoas estão conectadas em alguma rede social.`
    const container = document.getElementById(ǵraficos-container`
    constainer.appendChild(paragrafo)

visualizarInformacoesGlobais()
{
    "total_pessoas_conectadas"; 5.04e9,
    "total_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
}
