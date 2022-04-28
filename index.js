const panel = document.getElementById('panel')
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')
const selectedRating = 'Satisfied'
ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  } else if (e.target.classList.contains('rating')) {
    removeActive()
    e.target.classList.add('active')
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <strong>FeedBack: ${selectedRating}</strong>
    <p>We'll use your feedback to improve <br> our customer support


  `
})

function removeActive() {
  ratings.forEach(rating => rating.classList.remove('active'))
}