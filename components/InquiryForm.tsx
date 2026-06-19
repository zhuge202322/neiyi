"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Company
          <input name="company" type="text" placeholder="Company name" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Country
          <input name="country" type="text" placeholder="Country / market" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="name@company.com" required />
        </label>
      </div>
      <div className="form-grid">
        <label>
          WhatsApp
          <input name="whatsapp" type="tel" placeholder="+1 000 000 0000" />
        </label>
        <label>
          Quantity
          <input name="quantity" type="text" placeholder="e.g. 2,000 pcs / colour" />
        </label>
      </div>
      <label>
        Product Category
        <select name="category" defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          <option>Knitted Underwear</option>
          <option>Bras</option>
          <option>Panties</option>
          <option>Shapewear</option>
          <option>Thermal Wear</option>
          <option>Loungewear</option>
        </select>
      </label>
      <label>
        Target Price
        <input name="targetPrice" type="text" placeholder="Target price or price range" />
      </label>
      <label>
        Project Details
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about style, fabric, quantity, target market, packaging, and expected delivery."
          required
        />
      </label>
      <button className="button button--primary" type="submit">
        <Send size={18} />
        Submit Inquiry
      </button>
      {submitted ? (
        <p className="form-note">
          Thank you. This front-end demo captured the inquiry locally. Connect this form to email,
          CRM, or a backend endpoint before launch.
        </p>
      ) : null}
    </form>
  );
}
