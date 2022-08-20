function updateOneByClick(isIncrease, inputFieldId) {
    const inputNumberFild = document.getElementById(inputFieldId);
    const inputNumberFildString = inputNumberFild.value;
    const inputNumber = parseInt(inputNumberFildString);
    let newInputNumber;
    if (isIncrease) {
        newInputNumber = inputNumber + 1;
    }
    else {
        newInputNumber = inputNumber - 1;
    }
    return newInputNumber;
}
function setValueById(getId, setNewValue) {
    const getElementById = document.getElementById(getId);
    getElementById.value = setNewValue;
}
function updateTotalPrice(previousAmount, inputField) {
    const inputFieldById = document.getElementById(inputField);
    const inputFieldString = inputFieldById.value;
    const inputField1 = parseInt(inputFieldString);
    const total = previousAmount * inputField1;
    return total;
}
function setValueInIneerText(innerField, setValue) {
    const getInnerField = document.getElementById(innerField);
    getInnerField.innerText = setValue;
}
function totalCost(elementField) {
    const total = document.getElementById(elementField)
    const totalString = total.innerText;
    const totalCost = parseFloat(totalString);
    return totalCost;
}
function calculateTotalCost() {
    const phoneTotal = totalCost('previous-amount');
    const caseTotal = totalCost('case-previous-amount');
    const subTotal = phoneTotal + caseTotal;
    setValueInIneerText('sub-total', subTotal)
    const tax = subTotal * 0.05;
    const taxFixed = tax.toFixed(2);
    const taxCost = parseFloat(taxFixed);
    setValueInIneerText('tax', taxCost);
    const finalTotalCost = subTotal + taxCost;
    setValueInIneerText('full-totals', finalTotalCost);
}
// Phone
document.getElementById('phone-minus').addEventListener('click', function () {
    const updateValue = updateOneByClick(false, "phone-input")
    setValueById('phone-input', updateValue)
    const newTotalCost = updateTotalPrice(1219, 'phone-input')
    setValueInIneerText('previous-amount', newTotalCost)
    calculateTotalCost();
})

document.getElementById('phone-plus').addEventListener('click', function () {
    const updateValue = updateOneByClick(true, "phone-input")
    setValueById('phone-input', updateValue)
    const newTotalCost = updateTotalPrice(1219, 'phone-input')
    setValueInIneerText('previous-amount', newTotalCost)
    calculateTotalCost()

})
// Case
document.getElementById('case-minus').addEventListener('click', function () {
    const updateValue = updateOneByClick(false, "case-input")
    setValueById('case-input', updateValue)
    const newTotalCost = updateTotalPrice(59, 'case-input')
    setValueInIneerText('case-previous-amount', newTotalCost);
    calculateTotalCost();

})
document.getElementById('case-plus').addEventListener('click', function () {
    const updateValue = updateOneByClick(true, "case-input")
    setValueById('case-input', updateValue)
    const newTotalCost = updateTotalPrice(59, 'case-input',)
    setValueInIneerText('case-previous-amount', newTotalCost);
    calculateTotalCost();
})