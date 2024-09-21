import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Container5.css";

const Container5 = () => {
  const containerRef = useRef(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_omvbmqk",
        "template_e2ku65p",
        e.target,
        "bj1nmpK3QwrEcmPNZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const closeModal = () => {
    setIsEmailSent(false);
  };

  return (
    <div className="container5-0">
      <div className="container5" ref={containerRef}>
        <div className="container5-1">
          <hr />
          <h1>Say Hello</h1>
        </div>
        <div className="container5-2">
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {isEmailSent && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>Thank you for your message! We will get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container5;
