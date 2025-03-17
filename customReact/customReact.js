function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.value
    domElement.setAttribute('href', reactElement.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        value: "Click here to go to github"
    },
    target: 'https//github.com'
}

const modRoot = document.querySelector('root')

customRender(reactElement, modRoot) //our custom rendering method in our own react library.

