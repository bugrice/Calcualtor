class Calculator {
    $previousPreview
    $currentPreview

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
       // TODO: 벨리데이션
       this.$currentPreview.textContent += number
    }

    onPressOperation(operation) {
        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
    }
}

// 값 표시
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')

// 사칙연산
const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $multiply = document.querySelector('[data-btn-multiply]')
const $divide = document.querySelector('[data-btn-divide]')
const $eqaul = document.querySelectorAll('[data-btn-eqaul]')

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

const cal = new Calculator($previousPreview, $currentPreview)

$numbers.forEach(($number) => {
    $number.addEventListener("click", (e) => {
        cal.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener("click", (e) => {
       switch ($operation) {
            case $plus:
                cal.onPressOperation("+")
                break;
            case $minus:
                cal.onPressOperation("-")
                break;
            case $multiply:
                cal.onPressOperation("*")
                break;
            case $divide:
                cal.onPressOperation("÷")
                break;
            case $eqaul:
                //
                break;
            default:
                break;
       }
    })
})