import React, {FC} from 'react';
import "./style.scss";

const Home: FC = () => (
    <section className="section-home" id="home">
        <h3 className="hi">Hi there, my name is</h3>
        <h1 className="big-heading name">Matteo Lutz</h1>
        <h1 className="big-heading i-build">I'm an allround developer</h1>
    </section>
);

export default Home;