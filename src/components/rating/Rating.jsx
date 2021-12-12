import { HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = () => {
  const [rating, setRating] = useState(1);

  return (
    <HStack>
      <Text>Rating</Text>
      {[...Array(5)].map((_, index) => (
        <span onClick={() => setRating(index + 1)}>
          {rating > index ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </HStack>
  );
};

export default Rating;
