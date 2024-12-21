import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 300px;
    padding: 1.5rem;
    background-color: #1a1a1a;
    border: 2px solid #acc53d;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const CardTitle = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #acc53d;
`;

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas */
    gap: 1.5rem;
    justify-items: center;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;

    &:hover {
        color: #acc53d; /* Cambia el color al pasar el mouse */
    }
`;

const IconLabel = styled.span`
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ddd;
`;

const SkillCard = ({ title, icons }) => (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <IconGrid>
            {icons.map(({ icon: Icon, label }, index) => (
                <IconWrapper key={index}>
                    <Icon />
                    <IconLabel>{label}</IconLabel>
                </IconWrapper>
            ))}
        </IconGrid>
    </CardContainer>
);

export default SkillCard;
