import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router';

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 40px;
  @media (max-width: 430px) {
    margin: 0 8px;
  }
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 200px;
  font-size: 24px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  gap: 16px;
  margin-bottom: 16px;
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 5px solid #8b0000;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.87);
  color: #242424;
`;

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <Intro>
          <h1>Intro text</h1>
        </Intro>
        <CardContainer>
          <Card>
            <NavLink to={'./page1'}>page 1</NavLink>
            <div>text</div>
          </Card>
          <Card>
            <NavLink to={'./page2'}>page 2</NavLink>
            <div>some longer text here</div>
          </Card>
          <Card>
            <NavLink to={'./page3'}>page 3</NavLink>
            <div>some text here</div>
          </Card>
          <Card>
            <NavLink to={'./page4'}>page 4</NavLink>
            <div>ome really really long text that will wrap to a new line here</div>
          </Card>
        </CardContainer>
      </MainLayout>
    </>
  );
}

export default Home;
