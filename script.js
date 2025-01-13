document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })

  // Animate service cards on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp')
          entry.target.style.opacity = 1
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.service-card').forEach((card) => {
    card.style.opacity = 0
    observer.observe(card)
  })

  // Handle contact form submission
  const contactForm = document.querySelector('.contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)

      // Animate button during submission
      const submitButton = contactForm.querySelector('button')
      submitButton.innerHTML = '🐕 Wird geschnüffelt...'
      submitButton.disabled = true

      // Simulate form submission with playful messages
      setTimeout(() => {
        submitButton.innerHTML = '🦴 Nachricht in der Hundebox!'
        submitButton.style.backgroundColor = '#2ecc71'
        contactForm.reset()

        // Show success animation
        const successBone = document.createElement('div')
        successBone.className = 'success-bone'
        contactForm.appendChild(successBone)

        setTimeout(() => {
          submitButton.innerHTML = 'Nachricht absenden (Bitte nicht mit Pfote drücken)'
          submitButton.disabled = false
          submitButton.style.backgroundColor = ''
          successBone.remove()
        }, 3000)
      }, 1500)
    })
  }

  // Add parallax effect to hero section
  const hero = document.querySelector('.hero')
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px'
  })

  // Animate floating dog
  const floatingDog = document.querySelector('.floating-dog')
  if (floatingDog) {
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    document.addEventListener('mousemove', (e) => {
      const rect = floatingDog.getBoundingClientRect()
      targetX = e.clientX - rect.width / 2
      targetY = e.clientY - rect.height / 2
    })

    const updateDogPosition = () => {
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1
      
      floatingDog.style.transform = `translate(${currentX * 0.05}px, ${currentY * 0.05}px)`
      requestAnimationFrame(updateDogPosition)
    }

    updateDogPosition()
  }

  // Add paw prints behind the cursor
  let lastPawPrint = 0
  document.addEventListener('mousemove', (e) => {
    const now = Date.now()
    if (now - lastPawPrint > 300) {
      const pawPrint = document.createElement('div')
      pawPrint.className = 'paw-print'
      pawPrint.style.left = e.pageX + 'px'
      pawPrint.style.top = e.pageY + 'px'
      document.body.appendChild(pawPrint)

      setTimeout(() => pawPrint.remove(), 2000)
      lastPawPrint = now
    }
  })

  // Add hover effect to service cards
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)'
      card.style.transition = 'transform 0.3s ease'
    })

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)'
    })
  })

  // Animate section titles on scroll
  const sectionTitles = document.querySelectorAll('.section-title')
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = 'translateY(0)'
        }
      })
    },
    { threshold: 0.1 }
  )

  sectionTitles.forEach((title) => {
    title.style.opacity = 0
    title.style.transform = 'translateY(20px)'
    title.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    titleObserver.observe(title)
  })

  // Add wagging tail cursor
  const cursor = document.createElement('div')
  cursor.className = 'cursor-tail'
  document.body.appendChild(cursor)

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
  })

  // Random dog facts popup
  const dogFacts = [
    "Hunde können bis zu 100.000 mal besser riechen als Menschen!",
    "Ein Hundelächeln ist ansteckend - probieren Sie es aus!",
    "Hunde können Ihre Gefühle lesen... und Ihre Snacks riechen!",
    "Hundeohren haben 18 verschiedene Bewegungsmuskeln!",
    "Hunde träumen auch - vielleicht von Ihren Leckerlis?"
  ]

  const showRandomDogFact = () => {
    const fact = dogFacts[Math.floor(Math.random() * dogFacts.length)]
    const factElement = document.createElement('div')
    factElement.className = 'floating-fact animate__animated animate__bounceIn'
    factElement.textContent = fact
    document.body.appendChild(factElement)

    setTimeout(() => {
      factElement.classList.remove('animate__bounceIn')
      factElement.classList.add('animate__bounceOut')
      setTimeout(() => factElement.remove(), 1000)
    }, 3000)
  }

  // Show random dog fact every 30 seconds
  setInterval(showRandomDogFact, 30000)

  // Add bark sound effect to service cards
  const barkSounds = [
    "wuff!",
    "wau wau!",
    "wooof!",
    "*schwanzwedel*"
  ]

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const bark = document.createElement('div')
      bark.className = 'bark-text'
      bark.textContent = barkSounds[Math.floor(Math.random() * barkSounds.length)]
      card.appendChild(bark)

      setTimeout(() => bark.remove(), 1000)
    })
  })

  // Add CSS for new animations
  const style = document.createElement('style')
  style.textContent = `
    .cursor-tail {
      width: 20px;
      height: 20px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23FF6B6B" d="M256 224c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 240c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>') center/contain no-repeat;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.1s ease;
    }

    .floating-fact {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--accent-color);
      color: var(--text-color);
      padding: 1rem;
      border-radius: 10px;
      max-width: 300px;
      z-index: 1000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .bark-text {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 5px 10px;
      border-radius: 15px;
      animation: float-up 1s ease-out forwards;
    }

    @keyframes float-up {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, -20px); opacity: 0; }
    }

    .paw-print {
      position: absolute;
      width: 20px;
      height: 20px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23FFD93D" d="M256 224c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 240c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>') center/contain no-repeat;
      pointer-events: none;
      opacity: 0.6;
      animation: fade-out 2s ease-out forwards;
    }

    @keyframes fade-out {
      0% { opacity: 0.6; transform: scale(1); }
      100% { opacity: 0; transform: scale(0.5); }
    }

    .success-bone {
      position: absolute;
      width: 40px;
      height: 40px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%232ecc71" d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zm-128 48H96v320h192V96zm-64 272H128v-32h96v32zm0-64H128v-32h96v32zm0-64H128v-32h96v32zm0-64H128v-32h96v32zm192-80v288H384V96h32z"/></svg>') center/contain no-repeat;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: bone-success 3s ease-out forwards;
    }

    @keyframes bone-success {
      0% { transform: translate(-50%, -50%) scale(0); }
      50% { transform: translate(-50%, -50%) scale(1.2); }
      100% { transform: translate(-50%, -50%) scale(0); }
    }
  `
  document.head.appendChild(style)
})
