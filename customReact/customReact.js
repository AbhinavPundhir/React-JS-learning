function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.value
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https//github.com',
        target: '_blank'
    },
    value: " Hello to github"
}

const modRoot = document.querySelector('#root')

customRender(reactElement, modRoot) //our custom rendering method in our own react library.

