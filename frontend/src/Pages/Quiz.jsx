import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { SingleQuiz } from "./SingleQuiz";

export const Quiz = ({setScore,score,a,seta,settital}) => {
  let data = JSON.parse(localStorage.getItem("data"));
  let [newdata, setNewdata] = useState([]);

  console.log(score);
  let useId = localStorage.getItem("userid");
  const [i, setI] = useState(0);
  console.log(newdata);
  console.log(data.category);
  function getData(data) {
    if (data.category == "Geography") {
      fetch(
        `https://opentdb.com/api.php?amount=${
          data.count
        }&category=${22}&difficulty=${data.difficulty}&type=multiple`
      )
        .then((res) => res.json())
        .then((e) => {
          setNewdata(e.results)
          settital(e.results.length)
        });
    }
    if (data.category == "Sports") {
      fetch(
        `https://opentdb.com/api.php?amount=${
          data.count
        }&category=${21}&difficulty=${data.difficulty}&type=multiple`
      )
        .then((res) => res.json())
        .then((e) =>{ setNewdata(e.results)
        settital(e.results.length)}
        );
    }
    if (data.category == "Gk") {
      fetch(
        `https://opentdb.com/api.php?amount=${
          data.count
        }&category=${9}&difficulty=${data.difficulty}&type=multiple`
      )
        .then((res) => res.json())
        .then((e) =>{ setNewdata(e.results)
        settital(e.results.length)});
    }
  }

  useEffect(() => {
    getData(data);
  }, []);
  return (
    <Box m="auto">
      {newdata.length ? (
        <SingleQuiz
          item={newdata[i]}
          setI={setI}
          i={i}
          length={newdata.length}
          setScore={setScore}
          score={score}
          a={a}
          seta={seta}
        />
      ) : (
        ""
      )}
    </Box>
  );
};
