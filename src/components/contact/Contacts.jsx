import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contacts = () => {
  return (
    <section id ="contact">
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container cantact__container">
          <div className="contact__options">
            <article className="contact__options">
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>medvedev.oleg@yahoo.com</h5>
              <a href="mailto:medvedev.oleg@yahoo.com" target="_blank">Send a message</a>
            </article> 
            <article className="contact__options">
              <RiMessengerLine />
              <h4>Messenger</h4>
              <h5>egatotutorials</h5>
              <a href="https://m.me/profile.php?id=100001538139174" target="_blank">Send a message</a>
            </article>
            <article className="contact__options">
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+37369939695</h5>
              <a href="https://api.whatsapp.com/send?phone+37369939695" target="_blank">Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form action="">
            
          </form>
       </div>
    </section>
  )
}

export default Contacts