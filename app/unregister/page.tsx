"use client";

import { useState } from "react";
import axios from "axios";

export default function unregisterPage() {
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://api.huljak.cz/water-leak/remove", {
        street,
        email,
      });
      setMessage("Uživatel byl úspěšně odhlášen ze systému.");
      setIsError(false);
    } catch (error) {
      setMessage("Během odhlašování došlo k chybě.");
      setIsError(true);
    }
  };
  return (
    <div className="form-container animate-fade-in">
      <h2 className="form-title">Odhlášení ze systému</h2>
      <p className="form-text">
        Po zadání údajú budute odebráni ze sytému a už nebudete dostávat
        upozornění na výpadky vody.
      </p>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="street" className="form-label">
            Ulice
          </label>
          <input
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Odhlásit
        </button>
        {message && (
          <p
            className={`form-message ${
              isError ? "form-message-error" : "form-message-success"
            }`}
          >
            {message}
          </p>
        )}
      </form>{" "}
    </div>
  );
}
