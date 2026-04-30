const testimonials = [
  {
    text: "Excellent experience! The doctor was very professional, and staff was friendly and helpful.",
    name: "Michel R",
  },
  {
    text: "Very satisfied with the care I received. Everyone made me feel comfortable and respected.",
    name: "Sara L",
  },
  {
    text: "The clinic is clean and welcoming. The medical team was attentive and answered all my questions.",
    name: "Omar K",
  },
  {
    text: "Outstanding service from start to finish. I highly recommend this clinic to my friends.",
    name: "Layla T",
  },
  {
    text: "The appointment was on time, and the staff was very professional and kind throughout.",
    name: "John M",
  },
  {
    text: "Doctor was incredibly knowledgeable and explained everything clearly. Great experience.",
    name: "Maya A",
  },
  {
    text: "I felt heard and cared for during my visit. The staff showed genuine concern.",
    name: "Ali B",
  },
  {
    text: "Amazing team! They were friendly and supportive throughout my treatment process.",
    name: "Rania S",
  },
  {
    text: "Fast service, no waiting, and excellent medical care. Thank you!",
    name: "Hassan J",
  },
  {
    text: "I’ve never felt more comfortable in a clinic. Great environment and team.",
    name: "Dina H",
  },
];

const testimonialsContainer = document.getElementById("testimonials-section");

testimonials.forEach((testimonial) => {
  
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("testimonial-box");

  const p = document.createElement("p");
  p.textContent = testimonial.text;

  const strong = document.createElement("strong");
  strong.textContent = testimonial.name;

  testimonialDiv.appendChild(p);
  testimonialDiv.appendChild(strong);

  testimonialsContainer.appendChild(testimonialDiv);
});
