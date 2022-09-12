import React, {FC, useEffect, useRef, useState} from 'react';
import logo from "../../assets/png/logo.png";
import './style.scss';

const Navbar: FC = () => {

    const [prevScrollPos, _setPrevScrollPos] = useState<number>(window.pageYOffset);
    const prevScrollPosRef = useRef(prevScrollPos);
    const setPrevScrollPos = (p: number): void => {
        prevScrollPosRef.current = p;
        _setPrevScrollPos(p);
    }

    const [hidden, setHidden] = useState<boolean>(false);
    const [shadow, setShadow] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const currentScrollPos: number = window.pageYOffset;

            const willBeHidden: boolean = prevScrollPosRef.current < currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setHidden(willBeHidden);
            setShadow(currentScrollPos !== 0);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // noinspection HtmlUnknownAnchorTarget
    return (
        <div className={`nav${hidden ? " hidden" : ""}${shadow ? " shadow" : ""}`}>
            <a href="/" className="nav-brand">
                <img src={logo} alt="Matteo Lutz" />
            </a>

            <div className="nav-menu">
                <a href="/#about" className="nav-link">About</a>
                <a href="/#experience" className="nav-link">Experience</a>
                <a href="/#projects" className="nav-link">Projects</a>
                <a href="/#contact" className="nav-link">Contact</a>
            </div>

        </div>
    );
};

export default Navbar;