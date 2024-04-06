import FAQ from "./FAQ";

function ProductFAQ({ FAQs }) {
  return (
    <div>
      {FAQs.map((faq, index) => (
        <FAQ key={index} faq={faq} />
      ))}
    </div>
  );
}

export default ProductFAQ;
