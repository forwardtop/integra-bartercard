import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const faqs = [
  {
    question: "What is VOIP?",
    answer:
      "VoIP (Voice over Internet Protocol), is the technology of converting your voice calls into data packets, VoIP data packets are transmitted over the Internet. Data is secure and highly encrypted.",
    isOpen: false,
  },
  {
    question: "How does it work?",
    answer:
      "Simply plug your newIP phone(s) pre-programmed by UC8 into your network with an active internet connection and start calling! You can keep your current telephone number(s) or we can provide you with a new number(s).",
    isOpen: false,
  },
  // Add more FAQs as needed
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? false : value);

  return (
    <div className="text-gray-900">
      <h1 className="text-3xl font-bold my-4">
        You’ve got questions, we’ve got answers.
      </h1>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          open={open === index}
          icon={<Icon id={index} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(index)}>
            {faq.question}
          </AccordionHeader>
          <AccordionBody>{faq.answer}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};
export default Faq;
