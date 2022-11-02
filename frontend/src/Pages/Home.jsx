import { Box, Button, Heading, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  const handleSubmit = () => {
    let payload = JSON.stringify(data);
    console.log(payload);
    fetch(`https://stormy-refuge-21583.herokuapp.com/data/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("posted", res)
        console.log(res._id)
        localStorage.setItem('userid', res._id)
        localStorage.setItem('data',JSON.stringify(res))
        navigate("/quiz");
      })
      .catch((err) => console.log("not posterr", err));
  };
  return (
    <div>
      <Box m="auto">
        <Heading>Set up your Quiz</Heading>
      </Box>
      <Box m="auto">
        <Input
          w="50%"
          m="auto"
          type="text"
          name="user"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <br />
        <Select
          name="category"
          w="50%"
          m="auto"
          placeholder="Catagory"
          onChange={handleChange}
        >
          <option value="Gender" disabled selected hidden>
            Catagory
          </option>
          <option value="Gk">General Knowledge</option>
          <option value="Sports">Sports</option>
          <option value="Geography">Geography</option>
        </Select>
        <br />
        <br />
        <Select
          name="difficulty"
          w="50%"
          m="auto"
          placeholder="Select Difficulty"
          onChange={handleChange}
        >
          <option value="Gender" disabled selected hidden>
            Difficulty
          </option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </Select>
        <br />
        <br />
        <Input
          w="50%"
          m="auto"
          type="number"
          name="count"
          placeholder="Choose num of questions"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" onClick={handleSubmit}>
          START QUIZ
        </Button>
      </Box>
    </div>
  );
};
