const billInput = document.querySelector('.bill-input')
const tipBtns = document.querySelectorAll('.tip-btn')
const inputs = document.querySelectorAll('.input')
const customTipInput = document.querySelector('.custom-tip-input')
const peopleNumber = document.querySelector('.people-number-input')
const tipPerPersonEl = document.querySelector('.tip-per-person')
const totalPerPersonEl = document.querySelector('.total-per-person')
const resetBtn = document.querySelector('.reset-btn')
const errorMessage = document.querySelector('.error-message')

//Give pressed button an active class
tipBtns.forEach(function (tipBtn) {
  tipBtn.addEventListener('click', function () {
    document.querySelector('.active')?.classList.remove('active')
    tipBtn.classList.add('active')
    if (peopleNumber.value > 0) {
      calculateTip()
    }
  })
})

function calculateTip() {
  tipBtns.forEach(function (tipBtn) {
    if (tipBtn.classList.contains('active')) {
      const tipPercentage = Number(tipBtn.value / 100)

      const tipPerPerson =
        (billInput.value * tipPercentage) / peopleNumber.value

      const totalPerPerson = billInput.value / peopleNumber.value + tipPerPerson

      renderAmounts(tipPerPerson, totalPerPerson)
    }
  })
}

function renderAmounts(tip, total) {
  tipPerPersonEl.innerText = `$${tip.toFixed(2)}`
  totalPerPersonEl.innerText = `$${total.toFixed(2)}`
}

//run calculateTip() when 'enter' is pressed in any input

inputs.forEach(function (input) {
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && peopleNumber.value != 0) {
      calculateTip()
      peopleNumber.style.outline = '3px solid #26c2ae'
      errorMessage.style.display = 'none'
    }
    if (e.key === 'Enter' && peopleNumber.value == 0) {
      peopleNumber.style.outline = '3px solid #E17457'
      errorMessage.style.display = 'inline'
    }
  })
})

resetBtn.addEventListener('click', function () {
  billInput.value = ''
  document.querySelector('.active').classList.remove('active')
  customTipInput.value = ''
  peopleNumber.value = ''
  peopleNumber.style.outline = 'none'
  errorMessage.style.display = 'none'
  tipPerPersonEl.innerHTML = '$0.00'
  totalPerPersonEl.innerHTML = '$0.00'
})
