import React from 'react';
import Card from '../Components/Card';
import styled from 'styled-components';
import image1 from '../Images/image1.jpg';

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
        name="Gastón Metzger"
        description="Desarrollador Frontend usando React, JavaScript, CSS y HTML, con conocimientos en diseño web y experiencia en desarrollo de aplicaciones web."
        image={image1}
        skills={['React', 'JavaScript', 'CSS', 'HTML']}
      />
    </Container>
  );
};

export default Home;
