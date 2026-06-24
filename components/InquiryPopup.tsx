"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

const categories = ["Bras", "Panties", "Thermal Wear", "Shapewear", "Knitted Underwear", "Loungewear"];

export function InquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("winsun-inquiry-popup-closed") === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-modal-title">
      <div className="inquiry-modal__panel">
        <button
          className="inquiry-modal__close"
          type="button"
          aria-label="Close inquiry form"
          onClick={() => {
            window.sessionStorage.setItem("winsun-inquiry-popup-closed", "1");
            setOpen(false);
          }}
        >
          <X size={20} />
        </button>

        <div className="inquiry-modal__header">
          <MessageCircle size={22} />
          <div>
            <span className="eyebrow">Quick Inquiry</span>
            <h2 id="inquiry-modal-title">Inquiry Form</h2>
            <p>Share a few basics and Winsun will prepare the next sourcing step.</p>
          </div>
        </div>

        <form
          className="inquiry-modal__form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Company
            <input name="company" type="text" placeholder="Company name" />
          </label>
          <label>
            Country
            <input name="country" type="text" placeholder="Country / market" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="name@company.com" required />
          </label>
          <label>
            WhatsApp
            <input name="whatsapp" type="tel" placeholder="+86 000 0000 0000" />
          </label>
          <label>
            Product Category
            <select name="category" defaultValue="">
              <option value="" disabled>
                Select category
              </option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            Quantity
            <input name="quantity" type="text" placeholder="e.g. 2,000 pcs / colour" />
          </label>
          <label>
            Target Price
            <input name="targetPrice" type="text" placeholder="Target price" />
          </label>

          <button className="button button--primary" type="submit">
            <Send size={17} />
            Submit
          </button>

          {submitted ? (
            <p className="form-note">Thank you. Your inquiry has been captured in this front-end demo.</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
