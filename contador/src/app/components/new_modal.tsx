'use client';
import styled from 'styled-components';
import Logicatrue from './logica';
import Counter from './counter';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente para destacar o modal */
  position: fixed;
  top: 0;
  left: 0;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  height: 200px;
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 16px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #993399;
  color: white;
  padding: 15px;
  border-radius: 4px;
  width: 60px;
  height: 60px;
  text-align: center;
`;

const TimerLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;


export function New_Modal() {

const dateString = "October 01, 2024 23:59:59";
const timestamp = new Date(dateString).getTime();
const [day, hour, minute, second] = Logicatrue(timestamp);

//   const handleClose = () => {



//     console.log('Modal closed');
//   };

  return (
    
    <Container>
      <Conteudo>
        {/* <CloseButton onClick={handleClose}>×</CloseButton> */}
        <Title>Contagem regressiva para a SemComp</Title>
        <TimerContainer>
          <TimerItem>
            <TimerLabel>Dias</TimerLabel>
            {day}
          </TimerItem>
          <TimerItem>
            <TimerLabel>Hor</TimerLabel>
            {hour}
          </TimerItem>
          <TimerItem>
            <TimerLabel>Min</TimerLabel>
            {minute}
          </TimerItem>
          <TimerItem>
            <TimerLabel>Seg</TimerLabel>
            {second}
          </TimerItem>
        </TimerContainer>
      </Conteudo>
    </Container>
  );
}

export default New_Modal;