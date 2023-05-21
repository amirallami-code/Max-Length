let $ = document

const inputElem = $.getElementById('input')
const spanElem = $.getElementById('counter')
const inputMaxLength = inputElem.getAttribute('maxlength')

inputElem.addEventListener('keyup', function () {
    spanElem.innerHTML = inputMaxLength - inputElem.value.length
    if (counter.innerHTML === '0') {
        counter.style.color = '#f15858'
    } else {
        counter.style.color = '#58cff1'
    }
})