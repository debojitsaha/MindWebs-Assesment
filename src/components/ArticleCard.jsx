import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import articleContext from "../context/articles/articleContext";
import coins from "../assets/coins.png";

const ArticleCard = ({ article }) => {
  const { deleteArticle, editArticle, loading } = useContext(articleContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentArticle, setCurrentArticle] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });

  const onChange = (e) => {
    setCurrentArticle({ ...currentArticle, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editArticle(
      currentArticle.id,
      currentArticle.etitle,
      currentArticle.edescription
    );
    setCurrentArticle(currentArticle);
    onClose();
  };

  const updateArticle = () => {
    console.log("hello");
    setCurrentArticle({
      id: article._id,
      etitle: article.title,
      edescription: article.description,
    });
    onOpen();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl className="mb-3">
              <FormLabel>Article Title</FormLabel>
              <Input
                type="text"
                name="etitle"
                id="etitle"
                onChange={onChange}
                value={currentArticle.etitle}
              />
              <FormHelperText>
                Choose few words that best describes your article.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Article</FormLabel>
              <Input
                type="text"
                name="edescription"
                id="edescription"
                onChange={onChange}
                value={currentArticle.edescription}
              />
              <FormHelperText>Write your article here.</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={handleClick}
              isLoading={loading}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>      

      <Accordion allowToggle className="container">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                display={"flex"}
                justifyContent="space-between"
              >
                <Text
                  color={"gray.700"}
                  fontWeight={700}
                  fontSize="18px"
                  mr={2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  {article.title}
                  <Box
                    display={"flex"}
                    mx={2}
                    bgColor="#fce6b6"
                    px={3}
                    py={1}
                    borderRadius="5px"
                  >
                    <Text
                      color={"gray.700"}
                      fontWeight={600}
                      fontSize="16px"
                      mr={2}
                    >
                      Earn
                    </Text>
                    <Image src={coins} w="20px" />
                  </Box>
                </Text>
                <Box display={"flex"} mr={2}>
                  <Button colorScheme={"blue"} px={2} mx={2}>
                    <FiEdit
                      size={"18px"}
                      cursor="pointer"
                      onClick={() => updateArticle(currentArticle)}
                    />
                  </Button>
                  <Button colorScheme={"red"} px={2}>
                    <AiOutlineDelete
                      size={"18"}
                      cursor="pointer"
                      isLoading= {loading}
                      onClick={() => deleteArticle(article._id)}
                    />
                  </Button>
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color={"gray.700"}
            fontWeight={500}
            fontSize="16px"
          >
            {article.description}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ArticleCard;
