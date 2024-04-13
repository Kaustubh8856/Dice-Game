import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 0px;
    font-weight: 700;
    /* margin: 0; */
    /* padding-top: 20px; */
    margin-top: 60px;
  }
  p {
    font-size: 34px;
    font-weight: 500;
  }
`;