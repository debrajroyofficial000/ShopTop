import { useState } from "react";
function FAQ({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2 border rounded">
      <div
        className="bg-sea flex justify-between items-center p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="text-xl font-semibold">{faq.question}</p>
        <span>
          {isOpen ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-2">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQ;
