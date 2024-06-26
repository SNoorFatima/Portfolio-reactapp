import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" class="contact-section" data-aos="fade-up" data-aos-duration="1000">
    <div class="container-">
        <h2 class="section-title" data-aos="fade-up" data-aos-duration="1000">Contact <span>Us</span></h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-duration="1000">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
        <div class="contact-content">
            <div class="contact-form">
                <form action="#" method="post" data-aos="fade-up" data-aos-duration="1000">
                    <div class="form-group name">
                        <input type="text" name="name" placeholder="Your Name" required/>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required/>
                    </div>
                    <div class="form-group">
                        <input type="text" name="phone" placeholder="Your Phone" required/>
                    </div>
                    <div class="form-group subject">
                        <input type="text" name="subject" placeholder="Subject" required/>
                    </div>
                </form>
                <div class="submit">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <textarea name="message" placeholder="Your Message" rows="10" required class=" message-box"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="contact-button">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact
