import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  // const [hide, setHide] = useState();
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const scroll = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={scroll}>Show Rules</Button>
        </div>

        {/* <Rules /> */}
      </MainContainer>
      <Rules />
      <div className="top">
        <Button
          onClick={goTop}
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            maxWidth: "220px",
            marginBottom: "50px",
          }}
        >
          Back to Top
        </Button>
      </div>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  min-height: 80vh;
  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }

  .btns {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* max-width:200px; */
  }
`;
