import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
const Rating = ({ rating, onClick, color }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Box key={i} onClick={() => onClick(i)}>
          {rating > i ? <AiFillStar color="yellow" /> : <AiOutlineStar />}
        </Box>
      ))}
    </>
  );
};

export default Rating;
