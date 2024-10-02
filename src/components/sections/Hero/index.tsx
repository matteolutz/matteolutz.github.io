import Link from "@/components/primitives/Link";
import { FC } from "react";

const Hero: FC = () => (
  <section
    className="flex flex-col justify-center min-h-[100vh] relative"
    id="home"
  >
    <h3 className="font-mono font-normal mb-6 text-base text-tertiary">
      Hey there, my name is
    </h3>
    <h1 className="text-7xl text-secondary font-semibold max-md:text-5xl max-sm:text-3xl">
      Matteo Lutz.
    </h1>
    <h1 className="text-7xl text-primary font-semibold max-md:text-5xl max-sm:text-3xl">
      I build things with code.
    </h1>
    <p className="mt-6 w-full max-w-[540px] text-base">
      I'm a computer science student at the{" "}
      <Link href="https://tum.de" target="_blank">
        Technische Universität München
      </Link>{" "}
      and I like to build all sorts of things, that involve code. From creating
      websites to building compilers, I'm always up for a challenge.
    </p>
  </section>
);

export default Hero;
