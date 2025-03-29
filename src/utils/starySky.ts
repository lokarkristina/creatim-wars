// Get star layer elements from the DOM.
const z1 = document.getElementsByClassName('z-1')[0] as HTMLElement
const z2 = document.getElementsByClassName('z-2')[0] as HTMLElement
const z3 = document.getElementsByClassName('z-3')[0] as HTMLElement

// Ensure all elements exist.
if (!z1 || !z2 || !z3) {
  console.error('Star layer elements not found')
  throw new Error('Required star layer elements are missing')
}

// Movement ratio for parallax effect.
const ratio = 0.05

// Mouse position coordinates.
let x = 0
let y = 0

// Track mouse movement.
document.addEventListener('mousemove', (e: MouseEvent) => {
  x = e.pageX
  y = e.pageY
})

// Animate star layers with different parallax speeds.
function animate() {
  // First layer - fastest movement.
  z1.style.transform = `translate(${x * ratio}px, ${y * ratio}px)`

  // Second layer - medium movement with rotation.
  z2.style.transform = `translate(${(x * ratio) / 2}px, ${(y * ratio) / 2}px) rotate(217deg)`

  // Third layer - slowest movement with different rotation.
  z3.style.transform = `translate(${(x * ratio) / 3}px, ${(y * ratio) / 3}px) rotate(71deg)`

  // Continue animation loop.
  requestAnimationFrame(animate)
}

// Start the animation loop.
requestAnimationFrame(animate)
