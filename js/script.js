let $ = document

const inputElem = $.getElementById('input')
const spanElem = $.getElementById('counter')
const inputMaxLength = inputElem.getAttribute('maxlength')

inputElem.addEventListener('keyup', function () {
    spanElem.innerHTML = inputMaxLength - inputElem.value.length
})