const controls = document.querySelector('#controls');
const cssText = document.querySelector('.css');
const button = document.querySelector('.btn');
// metodo que contem as funções responsáveis por modificar o style do button
const handleStyle = {
    element:button,
    text(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    },
    textTransform(value) {
        this.element.style.textTransform = value;
    }
}

// função que pega os dados a cada mudança feita no formulário
function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // o método vai receber o name e ativar a função correspondente passando o value adquirido
    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}

function showCss() {
    cssText.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>');
}

// função que salva os dados no localStorage
function saveValues(name, value) {
    localStorage[name] = value;
}
// função que pega e seta os valores salvos no localStorage
function setValues() {
    // pegando as propriedades salvas
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        // ativando o metodo handleStyle para que o botão apareça com as ultimas alterações salvas
        handleStyle[propertie](localStorage[propertie]);
        // setando o valor salvo no formulário
        controls.elements[propertie].value = localStorage[propertie];
    });
    showCss();
}
setValues();
controls.addEventListener('change', handleChange);