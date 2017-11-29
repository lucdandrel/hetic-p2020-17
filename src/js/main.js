import Router from './Classes/Router'
import Landing from './Classes/Landing'
import Header from './Classes/Header'
import Creation from './Classes/Creation'
import Visualization from './Classes/Visualization'
import About from './Classes/About'
import NextButton from './Classes/NextButton'
import Travel from './Classes/Travel'
import Perf from './perf.json'

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})
new Router()
new Header(document.querySelector('.header'))
new About(document.querySelector('.section.ski'))
new Creation()
new Landing()
new Travel()
const nextButtons = document.querySelectorAll('.next')
nextButtons.forEach(button => {
  new NextButton(button)
})
new Visualization(document.querySelector('.performance__visualization-svg'), 6, Perf)
