import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard name={"Abhishek"} feedback={"Your are soo good ."} />

        <TestimonialCard
          name={"Razz"}
          feedback={
            "Wow what a portfolio, doesn't expected that all source code is free!"
          }
        />

        <TestimonialCard
          name={"Rahul"}
          feedback={"Amazing thats awesome website"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
