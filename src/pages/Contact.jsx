import emailjs from '@emailjs/browser'
import React from 'react'

function Contact() {
  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
  }

  emailjs
    .send(
      'service_5c7hxks',
      'template_d6kvlha',
      templateParams,
      'oXXRRoypADOU6-lSv'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
      },
      (err) => {
        console.log('FAILED...', err)
      }
    )
  return <div>Testing</div>
}

export default Contact
