import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase, FaJava, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiMongodb } from 'react-icons/si';
import image1 from '../Images/image1.jpg';
import SkillCard from '../Components/Card';
import 'typeface-fira-code';



const PageContainer = styled.div`
    min-height: 100vh;
    background-color: rgb(0, 0, 0); /* Fondo negro */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-family: 'Fira Code', monospace;
`;

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 3rem;
`;

const TextSection = styled.div`
    text-align: left;
`;

const Name = styled.h1`
    font-size: 4rem;
    margin: 0;
    color: #999;
    font-family: 'Fira Code', monospace;
`;

const Description = styled.p`
    font-size: 2rem;
    margin: 0.5rem 0 0;
    color: #acc53d;
    font-family: 'Fira Code', monospace;
`;

const IconButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
`;

const IconButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1a1a1a;
    color: #acc53d;
    font-size: 1.5rem;
    text-decoration: none;
    font-family: 'Fira Code', monospace;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #acc53d;
        color: #1a1a1a;
        transform: scale(1.1);
    }
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #ddd;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    margin-top: 30rem;

`;

const Home = () => {
    const nameEl = useRef(null);
    const descriptionEl = useRef(null);

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ['Gastón Metzger'], 
            typeSpeed: 50,
            backSpeed: 30,
            showCursor: false,
        });

        const typedDescription = new Typed(descriptionEl.current, {
            strings: ['FULLSTACK DEVELOPER'], 
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 1000,
            showCursor: false,
        });

        return () => {
            typedName.destroy();
            typedDescription.destroy();
        };
    }, []);

    return (
        <PageContainer>
            {/* Sección del Encabezado */}
            <BannerContainer>
                <TextSection>
                    <Name ref={nameEl}></Name>
                    <Description ref={descriptionEl}></Description>
                    {/* Botones de LinkedIn y GitHub */}
                    <IconButtonContainer>
                        <IconButton
                            href="https://www.linkedin.com/in/gast%C3%B3n-alessandro-metzger-arce-a8113b15b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                        </IconButton>
                        <IconButton
                            href="https://github.com/AlessoMTZ/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <FaGithub />
                        </IconButton>
                    </IconButtonContainer>
                </TextSection>
                <Image src={image1} alt="Gastón Metzger" />
            </BannerContainer>

            {/* Sección de Tarjetas */}
            <CardGrid>
                <SkillCard
                    title="Frontend"
                    icons={[
                        { icon: FaReact, label: 'React' },
                        { icon: FaHtml5, label: 'HTML5' },
                        { icon: FaCss3Alt, label: 'CSS3' },
                        { icon: SiJavascript, label: 'JavaScript' },
                    ]}
                />
                <SkillCard
                    title="Backend"
                    icons={[
                        { icon: FaNodeJs, label: 'Node.js' },
                        { icon: FaPython, label: 'Python' },
                        { icon: FaJava, label: 'Java' },
                    ]}
                />
                <SkillCard
                    title="Database"
                    icons={[
                        { icon: SiPostgresql, label: 'PostgreSQL' },
                        { icon: SiMongodb, label: 'MongoDB' },
                        { icon: FaDatabase, label: 'SQL' },
                    ]}
                />
            </CardGrid>
        </PageContainer>
    );
};

export default Home;
