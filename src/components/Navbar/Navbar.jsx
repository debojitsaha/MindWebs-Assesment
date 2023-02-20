import React, { useContext, useState } from "react";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Logo from "../../assets/mw_logo.png";
import coins from "../../assets/coins.png";
import profile from "../../assets/profile.jpg";
import {
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import articleContext from "../../context/articles/articleContext";
import { BsVectorPen } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(articleContext);
  const { addArticle, loading } = context;
  const [article, setArticle] = useState({ title: "", description: "" });

  const onChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addArticle(article.title, article.description);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    onClose();
  };

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
              <Input type="text" name="title" id="title" onChange={onChange} />
              <FormHelperText>
                Choose few words that best describes your article.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Article</FormLabel>
              <Input
                type="text"
                name="description"
                id="description"
                onChange={onChange}
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
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="navbar">
        <div className="left">
          <img src={Logo} alt="logo" />
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "#3b3b3b" }}>
              <strong>Mind</strong>Webs
            </span>
          </a>
          <div className="leftinner mx-5">
            <Text color={"#4e4e4e"} fontWeight={600} className="mx-3 ms-5">
              About
            </Text>
            <Text color={"#4e4e4e"} fontWeight={600} className="mx-3">
              Hubs
            </Text>
            <Text color={"#4e4e4e"} fontWeight={600} className="ms-3">
              Help
            </Text>
          </div>
          <div className="search">
            <input type="text" name="" id="" placeholder="Search.." />
            <SearchOutlinedIcon />
          </div>
        </div>
        <div className="rightouter">
          <div className="right">
            <div className="user">
              <img src={profile} className="profile" alt="profile" />
              <img src={coins} alt="coins" />
              <Button
                colorScheme="blue"
                rightIcon={<BsVectorPen />}
                onClick={onOpen}
                ml={3}
              >
                Write your article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
