class Calculator {
    $previousPreview
    $currentPreview
    previousOperation = ""
    currentOpenration = ""

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
       // 소수점 입력시 현재 입력 받은 데이터가 없는 경우
       if (number === "." && this.$currentPreview.textContent.length < 1) {
         return 
       }

       this.$currentPreview.textContent += number
    }

    onPressOperation(operation) {
        // 연산기호 입력시 현재 입력 받은 데이터가 없는 경우
        if (this.$currentPreview.textContent.length < 1) {
            return 
        }
        this.previousOperation = operation
        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
    }

    onEqual() {
        if (
            this.$currentPreview.textContent.length < 1 ||
            this.$previousPreview.textContent.length < 1 ||
            this.previousOperation.length < 1
        ) {
            return
        }

        let result = 0

        switch (this.previousOperation) {
            case "+":
                result = this.handlePlus()
                break
            case "-":
                result = this.handleMinus()
                break
            case "*":
                result = this.handleMultiply()
                break
            case "÷":
                result = this.handleDivide()
                break
            default:
                break
        }
        this.$currentPreview.textContent = result.toString()
        this.$previousPreview.textContent = ""
        this.currentOperation = ""
    }

    handlePlus() {
        return (
            Number(this.$previousPreview.textContent.split(" ")[0])
            + Number(this.$currentPreview.textContent)
        )
    }

    handleMinus() {
        return (
            Number(this.$previousPreview.textContent.split(" ")[0])
            - Number(this.$currentPreview.textContent)
        )
    }

    handleMultiply() {
        return (
            Number(this.$previousPreview.textContent.split(" ")[0])
            * Number(this.$currentPreview.textContent)
        )
    }

    handleDivide() {
        return (
            Number(this.$previousPreview.textContent.split(" ")[0])
            / Number(this.$currentPreview.textContent)
        )
    }

    onReset() {
        this.$currentPreview.textContent = ""
        this.$previousPreview.textContent = ""
        this.previousOperation = ""
        this.currentOpenration = ""
    }

    onDelete() {
        if (this.$currentPreview.textContent < 1) {
            return
        }

        this.$currentPreview.textContent = this.$currentPreview.textContent.slice(0, -1)
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
const $eqaul = document.querySelector('[data-btn-eqaul]')

// 리셋, 삭제
const $reset = document.querySelector('[data-btn-reset]')
const $delete = document.querySelector('[data-btn-delete]')

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
                cal.onEqual()
                break;
            default:
                break;
       }
    })
})

$reset.addEventListener("click", (e) => cal.onReset())
$delete.addEventListener("click", (e) => cal.onDelete())