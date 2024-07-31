// src/components/FAQ.jsx
// Remove the duplicate declaration of FAQComponent
const FAQComponent = () => {
  return (
    <div>
      <h1 className="pageHeaderTwo">FAQ</h1>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordionButton"
              id="faqButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is saudade art?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Saudade art is an online platform where you can buy unique
              handmade products.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordionButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I contact support?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can contact me through the Let&apos;s Talk page or send an
              email to help@saudadeart.com.
            </div>
          </div>
        </div>
        {/* <!-- Add more FAQs as needed --> */}
      </div>
    </div>
  );
};

export default FAQComponent;
