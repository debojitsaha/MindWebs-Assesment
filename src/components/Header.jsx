import {
  Box,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BiLike, BiDislike, BiEditAlt, BiShareAlt } from "react-icons/bi";
import { BsVectorPen } from "react-icons/bs";
import articleContext from "../context/articles/articleContext";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const context = useContext(articleContext)
  const { addArticle } = context
  const [article, setArticle] = useState({title:"",description:""})

  const onChange= (e)=>{
    setArticle({...article, [e.target.name]: e.target.value})
  }

  const handleClick= (e)=>{
    e.preventDefault()
    addArticle(article.title, article.description)
    document.getElementById('title').value= ""
    document.getElementById('description').value= ""
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write your Article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl className="mb-3">
              <FormLabel>Article Title</FormLabel>
              <Input type="text" name="title" id='title' onChange={onChange} />
              <FormHelperText>Choose few words that best describes your article.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Article</FormLabel>
              <Input type="text" name="description" id='description' onChange={onChange} />
              <FormHelperText>Write your article here.</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleClick}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="d-flex container my-2">
        <Box className="container mb-2">
          <Heading as="h3" className="my-1">
            Post your Articles over the cloud
          </Heading>
          <Text color="gray" className="mb-2">
            Online platform to write & store your articles
          </Text>
          <Text color="gray.600">
            <strong>Published:</strong> Feb 18, 2023
          </Text>
          <Text color="gray.600" className="mb-4">
            <strong>DOI:</strong> 123456789
          </Text>
          <Box display="flex">
            <BiLike className="mx-4" />
            <BiDislike className="mx-4" />
            <BiEditAlt className="mx-4" />
            <BiShareAlt className="mx-4" />
          </Box>
        </Box>
        <Box>
          <Button
            colorScheme="whatsapp"
            rightIcon={<BsVectorPen />}
            onClick={onOpen}
          >
            Write your article
          </Button>
        </Box>
      </div>
      <hr style={{ backgroundColor: "GrayText", height: "0.5px" }} />
    </>
  );
};

export default Header;
