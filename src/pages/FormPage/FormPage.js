import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createRobotThunk } from "../../redux/thunks/robotsThunks";

const H2 = styled.h2`
  margin-left: 50px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  margin-left: 15vw;

  color: white;

  label {
    margin-bottom: 15px;
    font-size: 25px;
  }
  input {
    margin-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    width: 250px;
    height: 40px;

    font-size: 17px;
    background-color: transparent;
    color: white;
    border: 3px solid #53a3cf;
    border-radius: 5px;
  }

  input::placeholder {
    color: #3e6880;
  }

  button {
    font-size: 20px;
    width: 100px;
    margin-bottom: 30px;

    background-color: transparent;
    color: white;
    border: 3px solid #53a3cf;
    border-radius: 10px;
    cursor: pointer;
  }
  button:disabled {
    border: 3px solid #3e6880;
    color: #3e6880;
    cursor: default;
  }
`;

const FormPage = () => {
  const blankForm = {
    name: "",
    url: "",
    velocity: "",
    resistance: "",
    creation_date: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(blankForm);
  const resetForm = () => {
    setFormData(blankForm);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isFormInvalid =
    formData.name === "" ||
    formData.url === "" ||
    formData.velocity === "" ||
    formData.resistance === "" ||
    formData.creation_date === "";

  const submitForm = async (event) => {
    event.preventDefault();

    const newRobot = {
      name: formData.name,
      url: formData.url,
      characteristics: {
        velocity: formData.velocity,
        resistance: formData.resistance,
        creation_date: formData.creation_date,
      },
    };
    await dispatch(createRobotThunk(newRobot));
    resetForm();
    navigate("/robots");
  };

  return (
    <>
      <H2>Create your robot</H2>

      <FormStyled noValidate autoComplete="off" onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Kev C. Dodds"
        />

        <label htmlFor="url">Image URL:</label>
        <input
          type="url"
          id="url"
          value={formData.url}
          onChange={changeData}
          placeholder="https://www.example.com/image.png"
        />

        <label htmlFor="velocity">Velocity:</label>
        <input
          type="number"
          id="velocity"
          min="0"
          max="10"
          value={formData.velocity}
          onChange={changeData}
          placeholder="8"
        />

        <label htmlFor="resistance">Resistance:</label>
        <input
          type="number"
          id="resistance"
          min="0"
          max="10"
          value={formData.resistance}
          onChange={changeData}
          placeholder="3"
        />

        <label htmlFor="creation_date">Resistance:</label>
        <input
          type="date"
          id="creation_date"
          min="0"
          max="10"
          value={formData.creation_date}
          onChange={changeData}
          placeholder="3"
        />

        <button type="submit" disabled={isFormInvalid}>
          Create
        </button>
      </FormStyled>
    </>
  );
};

export default FormPage;
