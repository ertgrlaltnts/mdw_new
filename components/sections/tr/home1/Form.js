"use client";
import { useState } from "react";

export default function Form({isGetOffer}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form verilerini API route'a gönderiyoruz
    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    // Yanıtın durumuna göre kullanıcıya mesaj gösteriyoruz
    if (res.ok) {
      setStatus("Mesajınız başarıyla gönderildi !");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Mesaj gönderirken bir hata oluştur.");
    }
  };


  return (
    <>
      <section style={isGetOffer && {marginTop:0, marginBottom:60}} className="contact-page__bottom">
        <div className="comment-form">
          <h3 style={{ marginBottom: 20 }} className="comment-one__title">
            Bize Mesaj Gönder
          </h3>
          <form
            onSubmit={handleSubmit}
            className="comment-one__form contact-form-validated"
          >
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="comment-form__input-box">
                  <input
                    type="text"
                    placeholder="Adınız & Soyadınız*"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="comment-form__input-box">
                  <input
                    type="email"
                    placeholder="Email Adresiniz*"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-xl-12 col-lg-12">
                <div className="comment-form__input-box">
                  <input
                    type="text"
                    placeholder="Telefon Numaranız*"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="comment-form__input-box text-message-box">
                  <textarea
                    placeholder="Mesajınız*"
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="comment-form__btn-box">
                  <button type="submit" className="thm-btn comment-form__btn">
                    Mesajı Gönder
                  </button>
                </div>
                {status && (
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginTop: 15,
                      textAlign: "center",
                    }}
                  >
                    {status}
                  </p>
                )}
              </div>
            </div>
          </form>
          <div className="result"></div>
        </div>
      </section>
    </>
  );
}
