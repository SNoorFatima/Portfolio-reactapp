
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <section id="contact" className="contact-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container-">
          <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">Contact <span>Us</span></h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-duration="1000">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          <div className="contact-content">
            {isSubmitted ? (
              <div>
                <h3>Submitted Data:</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Subject:</strong> {formData.subject}</p>
                <p><strong>Message:</strong> {formData.message}</p>
                <button onClick={handleEdit} className='Edit-button'>Edit</button>
              </div>
            ) : (
              <div className="contact-form">
                <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="1000">
                  <div className="form-group name">
                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group subject">
                    <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="submit">
                    <div data-aos="fade-up" data-aos-duration="1000">
                      <textarea name="message" placeholder="Your Message" rows="10" required className="message-box" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div>
                      <button type="submit" className="contact-button">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
