import React from "react";
import contact from "../../assets/contact/contact.png";

const Contact = () => {
  return (
    <section className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2 lg:pr-12 text-center lg:text-left">
          <img src={contact} alt="phone" className="" />
        </div>
        <div className="card lg:w-1/2 shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-5xl font-bold text-center mb-3">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
