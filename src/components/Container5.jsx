import React, { useEffect, useRef, useState } from "react";
import "./Container5.css";

const Container5 = () => {
  const containerRef = useRef(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setIsEmailSent(true); // Show modal immediately
    setErrorMessage(""); // Clear previous error messages

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setIsEmailSent(false); // Close modal immediately
        window.scrollTo(0, 0); // Scroll to the top
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Nepavyko išsiųsti el. laiško. Bandykite dar kartą.");
        setIsEmailSent(false); // Hide modal if there's an error
        window.scrollTo(0, 0); // Scroll to the top
        window.location.reload(); // Reload the page even if there's an error
      });

    e.target.reset();
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
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>
        {isEmailSent && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="checkmark">&#10003;</div>
                <p>Thank you for your message! We will get back to you soon.</p>
              </div>
              <div className="progress-bar"></div>
            </div>
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Container5;
