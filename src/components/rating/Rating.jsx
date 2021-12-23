import { HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, handleStarRating, fontSize, cursor, noClick }) => {
  return (
    <HStack>
      <Text fontSize={fontSize}>Rating</Text>
      {noClick
        ? [...Array(5)].map((_, index) => (
            <span key={index} style={{ cursor }}>
              {rating > index ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))
        : [...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{ cursor }}
              onClick={() => handleStarRating(index)}
            >
              {rating > index ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
    </HStack>
  );
};

export default Rating;
