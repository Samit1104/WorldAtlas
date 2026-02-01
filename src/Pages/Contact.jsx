export const Contact = () => {

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
    }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper contanier">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
