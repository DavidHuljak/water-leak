"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [acceptTos, setAcceptTos] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://api.huljak.cz/water-leak/add", {
        name,
        email,
        street,
      });
      setMessage("Uživatel byl úspěšně zaregistrován do systému.");
      setIsError(false);
    } catch (error) {
      setMessage("Během registrace došlo k chybě.");
      setIsError(true);
      console.error(error);
    }
  };
  return (
    <div className="form-container animate-fade-in">
      <h2 className="form-title">Registrace do systému</h2>
      <p className="form-text">
        Zadejte své údaje a budete dostávat upozornění na výpadky vody ve vaší
        lokalitě.
      </p>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Jméno
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="form-checkbox">
          <input
            id="tos"
            type="checkbox"
            checked={acceptTos}
            onChange={(e) => setAcceptTos(e.target.checked)}
          />
          <label htmlFor="tos">Souhlasím s podmínkami služby</label>
        </div>
        <button type="submit" disabled={!acceptTos} className="form-button">
          Odeslat
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
