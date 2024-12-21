import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';
import image1 from '../Images/image1.jpg';
import bannerImage from '../Images/banner.jpg';

const BannerContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: center; 
    height: 300px;
    position: relative;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative; /* Habilita el control independiente */
    top: 100px; /* Ajusta esta propiedad para mover verticalmente */
    left: 70px; /* Ajusta esta propiedad para mover horizontalmente */
`;

const Name = styled.h1`
    font-size: 2.5rem;
    margin: 0;
    color:rgb(0, 212, 240);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

const Description = styled.p`
    font-size: 1.2rem;
    margin: 0.5rem 0 0;
    color:rgb(236, 236, 236);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

const Image = styled.img`
    width: 230px;
    height: 230px;
    object-fit: cover;
    border-radius: 50%;
    position: relative; /* Habilita el control independiente */
    top: 30px; /* Ajusta esta propiedad para mover verticalmente */
    right: 100px; /* Ajusta esta propiedad para mover horizontalmente */
`;

const Home = () => {
    const nameEl = useRef(null);
    const descriptionEl = useRef(null);

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ['Gastón Metzger'], // Texto que se escribe
            typeSpeed: 50,
            backSpeed: 30,
            showCursor: false,
        });

        const typedDescription = new Typed(descriptionEl.current, {
            strings: ['FULLSTACK DEVELOPER'], // Texto que se escribe
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 1000,
            showCursor: false,
        });

        // Limpieza
        return () => {
            typedName.destroy();
            typedDescription.destroy();
        };
    }, []);

    return (
        <BannerContainer>
            <TextContainer>
                <Name ref={nameEl}></Name>
                <Description ref={descriptionEl}></Description>
            </TextContainer>
            <Image src={image1} alt="Gastón Metzger" />
        </BannerContainer>
    );
};

export default Home;
