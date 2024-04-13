import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <div className="rules_content">
        <h2>How to play Dice Game</h2>
        <div className="text">
          <p>Select any number.</p>
          <p>Click on the dice image.</p>
          <p>
            If selected number is equal to the number on the dice image, you
            will earn same points as on the dice.
          </p>
          <p>
            If your guess is wrong then 2 points will be deducted from the
            score.
          </p>
        </div>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  padding: 100px 0 50px 0;
  margin: 0 auto;
  .rules_content {
    padding: 0 40px;
    background-color: #fbf1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    font-size: 24px;
    text-align: center;
  }

  .text {
    margin-top: -10px;
    line-height: 13px;
    font-size: 17px;
    padding-bottom: 15px;
    font-weight: 500;
  }
`;
