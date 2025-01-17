'use client'

import { useEffect } from 'react'

export function initializeCopyButtons() {
  useEffect(() => {
    const initButtons = () => {
      const buttons = document.querySelectorAll('[data-code-copy]')
      
      buttons.forEach(button => {
        // Remove existing listeners
        const newButton = button.cloneNode(true)
        button.parentNode.replaceChild(newButton, button)
        
        newButton.addEventListener('click', async () => {
          // Find the code element
          const pre = newButton.nextElementSibling
          const code = pre.querySelector('code')
          const text = code.textContent

          try {
            await navigator.clipboard.writeText(text)
            newButton.textContent = 'Copied!'
            newButton.setAttribute('data-copied', 'true')

            // Reset after 2 seconds
            setTimeout(() => {
              newButton.textContent = 'Copy'
              newButton.removeAttribute('data-copied')
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
            newButton.textContent = 'Failed to copy'
          }
        })
      })
    }

    // Initialize on mount
    initButtons()

    // Re-initialize when content changes
    const observer = new MutationObserver(initButtons)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])
} 