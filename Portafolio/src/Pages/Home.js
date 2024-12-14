import React from 'react';
import Card from '../Components/Card';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <Card
        name="Juan Pérez"
        description="Desarrollador Frontend con pasión por crear aplicaciones web modernas."
        image="https://via.placeholder.com/80"
        skills={['React', 'JavaScript', 'CSS', 'HTML']}
      />
    </Container>
  );
};

export default Home;
