const billInput = document.querySelector('.bill-input')
const tipBtns = document.querySelectorAll('.tip-btn')
const peopleNumber = document.querySelector('.people-number-input')
const tipPerPersonEl = document.querySelector('.tip-per-person')
const totalPerPersonEl = document.querySelector('.total-per-person')
const resetBtn = document.querySelector('.reset-btn')

//Give pressed button an active class
tipBtns.forEach(function (tipBtn) {
  tipBtn.addEventListener('click', function () {
    document.querySelector('.active')?.classList.remove('active')
    tipBtn.classList.add('active')
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

peopleNumber.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    calculateTip()
  }
})

resetBtn.addEventListener('click', function () {
  billInput.value = 0
  document.querySelector('.active').classList.remove('active')
  peopleNumber.value = 0
  tipPerPersonEl.innerHTML = '$0.00'
  totalPerPersonEl.innerHTML = '$0.00'
})
