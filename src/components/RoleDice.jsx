import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  p {
    font-size: 24px;
  }
  img {
    cursor: pointer;
  }
`;
