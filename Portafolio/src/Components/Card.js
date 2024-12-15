import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
    background-color: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0 4 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-10px);
    }
`;

const Image = styled.img`
    width: 300px;
    height: 400px;
    object-fit: 50%;
    border-radius: 1rem;
`;

const Name = styled.h2`
    margin: 1rem 0;
    color: #333;
`;

const Description = styled.p`
    color: #555;
    font-size: 1rem;
`;

const Skills = styled.div`
    margin-top: 1rem;
    font-size: 0.9rem;
`;

const Card = ({ image, name, description, skills }) => {
    return (
        <CardContainer
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
           {image && <Image src={image} alt={name} />}
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Skills><strong>Skills:</strong> {skills.join(', ')}</Skills>
        </CardContainer>
    );
};

export default Card;