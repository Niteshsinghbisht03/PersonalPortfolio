import React from "react";
import Section from "../components/Section";
import ContactInfo from "./ContactInfo";
import FormPage from "./FormPage";
const Contact = () => {
  return (
    <Section
      id="contact"
      title="Any Question? Feel Free to Contact"
      background="light"
    >
      <div className="contactcontentwrapper h-full w-full mt-[25px] md:mt-[75px] flex flex-col md:flex-row">
        <ContactInfo />

        <FormPage />
      </div>
    </Section>
  );
};

export default Contact;
