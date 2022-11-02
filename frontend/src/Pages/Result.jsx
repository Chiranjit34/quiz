import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";
export const Result = ({ score, a, tital }) => {
  return (
    <Box
      w="50%"
      bg="lightgrey"
      m="auto"
      mt="50px"
      p="20px"
      borderRadius="20px"
      justify="center"
      align="center"
    >
      <Heading mb="20px">Results</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Correct answers count</Th>
              <Th>Incorrect answers count</Th>
              <Th>Total score</Th>
              <Th>Percentage</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{a}</Td>
              <Td>{tital - a}</Td>
              <Td>{score}</Td>
              <Td>{(score / tital) * 100}%</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
