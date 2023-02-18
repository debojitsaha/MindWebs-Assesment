import React from 'react'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Box, Text } from '@chakra-ui/react';

const ArticleCard = ({article}) => {
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <Text fontWeight={600} fontSize='24px' className="card-title" >{article.title}</Text>
          <Text fontSize='16px' className="card-text"> {article.desc} </Text>  
          <Box display='flex'>
          <FiEdit className='mt-3 me-3' size={'23px'} />        
          <AiOutlineDelete className='mt-3' size={'23px'} />        
          </Box>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard