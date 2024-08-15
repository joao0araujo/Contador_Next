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
  width: 500px;
  height: 250px;
  background: rgba(255, 255, 255, 0.5);
`;
const Text = styled.div`


`

export function Modal() {
  const dateString = "July 29, 2024 23:59:00";
  const timestamp = new Date(dateString).getTime();
  const [day, hour, minute, second] = Logicatrue(timestamp);

  return (
    <Container>
      <Conteudo>
        <Text>
            <h1>Contagem regressiva</h1>
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
        </Text>
      </Conteudo>
    </Container>
  );
}

export default Modal;
