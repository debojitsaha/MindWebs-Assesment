import {
  Box,
  Heading,
  Text,
  Image,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import articleContext from "../context/articles/articleContext";
import page from "../assets/page.png";
import sharing from "../assets/sharing.png";
import pen from "../assets/pen.png";
import tag from "../assets/tag.png";
import download from "../assets/download.png";
import profile from "../assets/profile.jpg";

const Header = () => {
  const context = useContext(articleContext);
  const { articles } = context;

  return (
    <>
      <div className="d-flex container my-2">
        <Box className="container mb-2">
          <Heading fontSize={"30px"} className="my-1" color={"#474545"}>
            Post your Articles over the cloud
          </Heading>
          <Text color="gray" className="mb-2">
            Online platform to write & store your articles
          </Text>
          <Box display={"flex"}>
            <Text color="gray.600">
              <strong>Last Published:</strong>{" "}
              {articles.length !== 0
                ? articles[articles.length - 1].date.toString().slice(0, 10)
                : "loading.."}
              {/* {console.log(articles.length!==0?articles[articles.length-1].date:"loading..")} */}
            </Text>
            <AvatarGroup size="sm" max={3} ml={5}>
              <Avatar name="Ryan Florence" src={profile} />
              <Avatar name="Segun Adebayo" src={profile} />
              <Avatar name="Kent Dodds" src={profile} />
            </AvatarGroup>
          </Box>
          <Text color="gray.600" className="mb-4">
            <strong>DOI:</strong> 123456789
          </Text>
          <Box className="d-flex my-3">
            <Box className="d-flex flex-column me-3">
              <Text color={"gray.700"} fontWeight={500}>
                Expert Score
              </Text>
              <Text
                color={"blue.500"}
                align="center"
                fontWeight={500}
                fontSize="20px"
              >
                98
              </Text>
            </Box>
            <Box className="d-flex flex-column">
              <Text color={"gray.700"} fontWeight={500}>
                Overall Score
              </Text>
              <Text
                color={"green.400"}
                align="center"
                fontWeight={500}
                fontSize="20px"
              >
                95
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems={"center"}>
            <BiLike className="mx-4" size={"22px"} />
            <BiDislike className="mx-4" size={"22px"} />
            <Image src={pen} h="24px" className="mx-2" />
            <Image src={sharing} h="24px" className="mx-2" />
            <Image src={sharing} h="24px" className="mx-2" />
            <Image src={tag} h="24px" className="mx-2" />
            <Text
              bgColor={"gray.200"}
              p="3px 10px"
              borderRadius={"5px"}
              color="blue.500"
              fontWeight={500}
              fontSize="18px"
              mx={2}
            >
              Article
            </Text>
          </Box>
        </Box>
        <Box
          className="mt-2"
          display={"flex"}
          flexDir="column"
          alignItems="center"
        >
          <Image src={page} w="120px" />
          <Image src={download} w="30px" mt={3} />
        </Box>
      </div>
      <Box display={"flex"} className="container ">
        {articles.map((article, i) => {
          return (
            <Text
              fontWeight={500}
              mr={4}
              color={i === 0 ? "blue" : "gray.700"}
              borderBottom={i === 0 ? "2px" : "none"}
              borderColor={"blue.500"}
            >
              <span style={{ color: "blue", fontWeight: "bold" }}>+</span>
              {article.title}
            </Text>
          );
        })}
      </Box>
      <hr
        style={{ backgroundColor: "GrayText", height: "0.5px", border: "none" }}
      />
    </>
  );
};

export default Header;
