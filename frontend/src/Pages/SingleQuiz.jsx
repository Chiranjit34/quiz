import { background, Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SingleQuiz = ({ item, setI ,i,length,setScore,score,a,seta}) => {
    const navigate=useNavigate()
  console.log(item)
  return (
    <Box
    m="auto"
     
      w="80%"
      h="150px"
      mt="20px"
      mb="20px"
      // border="1px solid grey"
    >
      <Box mb="20px"  borderRadius="10px" color="#fff" bg="#9d0848" p="20px"fontWeight={500}>{item.question} </Box>
      <Box
        // 
        mb="10px"  borderRadius="10px" color="#fff" p="10px" bg="#29282d"

        _hover={{color:"black",
          cursor: "pointer",
          bg: "lightgrey",

        }}
        onClick={()=>{alert("wrong answer")
        i<length-1 && setI((p)=>p+1)}}
      >
        {" "}
        {item.incorrect_answers[0]}
      </Box>
      <Box
        mb="10px"  borderRadius="10px" color="#fff" p="10px" bg="#29282d"
        _hover={{color:"black",
          cursor: "pointer",
          bg: "lightgrey",
        }}
        onClick={(e)=>{
          setScore(score+=1)
          alert("correct answer")
          i<length-1 &&  setI((p)=>p+1)
          
          seta(a+=1)
        }}
      >
        {item.correct_answer}
      </Box>
      <Box
        mb="10px"  borderRadius="10px" color="#fff" p="10px" bg="#29282d"
        _hover={{color:"black",
          cursor: "pointer",
          bg: "lightgrey",
        }}onClick={()=>{alert("wrong answer")

        i<length-1 && setI((p)=>p+1)}}
      >
        {item.incorrect_answers[1]}
      </Box>
      <Box
        mb="10px"  borderRadius="10px" color="#fff" p="10px" bg="#29282d"
        _hover={{color:"black",
          cursor: "pointer",
          bg: "lightgrey",
        }}onClick={()=>{alert("wrong answer")
        i<length-1 && setI((p)=>p+1)}}
      >
        {item.incorrect_answers[2]}
      </Box>
      <Flex gap="2%">
        <Button mt="20px"disabled={i==0}  onClick={()=>setI((p)=>p-1)}>Prev</Button>
       {
        i==length-1?<Button mt="20px" colorScheme={"messenger"} onClick={()=>navigate("/results")}>Submit</Button>:<Button mt="20px" onClick={()=>setI((p)=>p+1)}>Next</Button>
       }
      </Flex>
    </Box>
  );
};
