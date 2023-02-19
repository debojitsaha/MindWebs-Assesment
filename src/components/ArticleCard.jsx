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
} from "@chakra-ui/react";
import articleContext from "../context/articles/articleContext";

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
    <>
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

      <div className="col-md-4">
        <div
          className="card my-3 shadow bg-body-tertiary rounded"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <div className="card-body">
            <Text
              fontWeight={600}
              fontSize="24px"
              className="card-header mb-3 text-center"
            >
              {article.title}
            </Text>
            <Text fontSize="16px" className="card-text">
              {" "}
              {article.description}{" "}
            </Text>
          </div>
          <Box
            display="flex"
            className="card-footer"
            alignItems={"center"}
            justifyContent="center"
          >
            <FiEdit
              className="me-3"
              size={"23px"}
              cursor="pointer"
              onClick={() => updateArticle(currentArticle)}
            />
            <AiOutlineDelete
              size={"23px"}
              cursor="pointer"
              onClick={() => deleteArticle(article._id)}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
