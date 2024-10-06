import PrimitiveLink from "@/components/primitives/PrimitiveLink";
import SectionHeading from "@/components/primitives/SectionHeading";
import { FC } from "react";

const Contact: FC = () => (
  <section className="section h-[65vh]" id="contact">
    <div className="w-full h-full flex justify-center items-center flex-col">
      <SectionHeading heading="Get In Touch" />
      <div className="w-full max-w-[600px] flex justify-center items-center text-center flex-col gap-10">
        <p className="text-base">
          I'm always open to new opportunities, whether it's custom software
          development, website creation, or any other tech challenge. Don't
          hesitate to reach out—I'd love to hear about your project and see how
          I can help!
        </p>
        <PrimitiveLink
          target="_blank"
          className="text-xl font-mono"
          href="mailto:info@matteolutz.de"
        >
          Reach Out!
        </PrimitiveLink>
      </div>
    </div>
  </section>
);

export default Contact;
