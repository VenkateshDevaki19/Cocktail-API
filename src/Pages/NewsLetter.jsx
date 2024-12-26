import React from "react";
import { Form, useNavigation } from "react-router";

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="newsletter_page">
      <h4>Our Newsletter</h4>

      <div className="form-row">
        <label htmlFor="first-name" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="last-name" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="LastName"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-input"
          name="Email"
          id="Email"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="TextArea" className="form-label">
          Feedback Message:
        </label>
        <input
          type="textarea"
          className="form-input"
          name="textarea"
          id="textarea"
        />
      </div>

      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {" "}
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;
