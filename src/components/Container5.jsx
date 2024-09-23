import React, { useEffect, useRef, useState } from "react";
import "./Container5.css";

const Container5 = () => {
  const containerRef = useRef(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isTimeout, setIsTimeout] = useState(false);

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
    setIsTimeout(false); // Reset timeout state

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const timeoutId = setTimeout(() => {
      setIsTimeout(true);
      setIsEmailSent(false); // Hide success message and checkmark
    }, 5000);

    fetch("https://email-server-ern5.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setIsEmailSent(false);
        window.scrollTo(0, 0);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Error, try again!");
        setIsEmailSent(false);
        window.scrollTo(0, 0);
        window.location.reload();
      });

    e.target.reset();
  };

  const closeModal = () => {
    setIsEmailSent(false);
    setIsTimeout(false);
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
        {isEmailSent && !isTimeout && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="checkmark">&#10003;</div>
                <p>Thank you for your message! We will get back to you soon.</p>
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
              </div>
              <div
                className={`progress-bar ${isTimeout ? "timeout" : ""}`}
              ></div>
            </div>
          </div>
        )}
        {isTimeout && (
          <div className="modal">
            <div className="modal-content">
              <div className="timeout-message-container">
                <p className="timeout-message">
                  Sorry, your message did not send, there are issues with the
                  backend server.
                </p>
                <p className="contact-message">
                  You can still contact me:
                  <a
                    href="https://www.linkedin.com/in/dainiusgenutis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </p>
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Container5;
