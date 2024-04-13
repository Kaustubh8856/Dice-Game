import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Outer>
      <p>{error}</p>
      <NumberSelectorContainer>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </NumberSelectorContainer>

      <div className="para">
        <h3>Select Number</h3>
      </div>
    </Outer>
  );
};

export default NumberSelector;
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 510px;

  p {
    font-size: 20px;
    color: red;
  }

  .para {
    display: flex;
    font-size: 20px;
    font-weight: bold;
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
