function scrollHeader () {
  const nav = document.getElementById('header')

  if (this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}


window.addEventListener('scroll', scrollHeader)

const menuItens = []

for (let i = 0; i< document.getElementById("menus").childNodes.length; i++) {
  if (document.getElementById("menus").childNodes[i].id?.includes('menu-item-')) {
    menuItens.push(document.getElementById("menus").childNodes[i])
  }
}

function showDropdown (event) {
  event.preventDefault()
  const dropdown = event.path.find(el => {
    return el.id.includes('menu-item-')
  })
  const dropdownIdActive = `dropdown-item-${dropdown.id.split('menu-item-')[1]}`

  menuItens.forEach((el, index) => {
    if (`dropdown-item-${index+1}` === dropdownIdActive) {
      document.getElementById(`dropdown-item-${index+1}`).classList.toggle('active-dropdown-menu')
    } else {
      document.getElementById(`dropdown-item-${index+1}`).classList.remove('active-dropdown-menu')
    }
  })
}

function removeDropdown () {
  menuItens.forEach((el, index) => {
    document.getElementById(`dropdown-item-${index+1}`).classList.remove('active-dropdown-menu')
  })
}

const dropdownSets = []
menuItens.forEach((menu, index) => {
  menu.addEventListener('click', showDropdown)
  document.getElementById(`dropdown-item-${index+1}`).addEventListener('mouseleave', removeDropdown)
})



// Menu mobile



const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile')
      toggle.classList.toggle('active-bx')
    })
  }
}

showMenu('bx', 'menu-mobile')