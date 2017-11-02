class Header {
  constructor (header) {
    this.header = header
    this.btn_toggle = header.querySelector('.header-toggle')
    this.btn_toggle.addEventListener('click', () => {
      this.toggle()
    })
    console.log('init header')
  }
  toggle () {
    this.header.classList.toggle('header--show')
  }
}

export default Header
