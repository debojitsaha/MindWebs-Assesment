import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import articleContext from "../context/articles/articleContext";
import page from "../assets/page.png";
import sharing from "../assets/sharing.png";
import pen from "../assets/pen.png";
import tag from "../assets/tag.png";

const Header = () => {
  const context = useContext(articleContext);
  const { articles } = context;

  return (
    <>
      <div className="d-flex container my-2">
        <Box className="container mb-2">
          <Heading as="h3" className="my-1">
            Post your Articles over the cloud
          </Heading>
          <Text color="gray" className="mb-2">
            Online platform to write & store your articles
          </Text>
          <Text color="gray.600">
            <strong>Published:</strong>{" "}
            {articles.length !== 0
              ? articles[articles.length - 1].date.toString().slice(0, 10)
              : "loading.."}
            {/* {console.log(articles.length!==0?articles[articles.length-1].date:"loading..")} */}
          </Text>
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
          <Box display="flex">
            <BiLike className="mx-4" size={"28px"} />
            <BiDislike className="mx-4" size={"28px"} />
            <Image src={pen} className="mx-2" w="25px" h="28px" />
            <Image src={sharing} w="25px" h="28px" className="mx-2" />
            <Image src={sharing} w="25px" h="28px" className="mx-2" />
            <Image src={tag} w="25px" h="28px" className="mx-2" />
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
        <Box className="mt-2">
          <Image src={page} w="100px" />
        </Box>
      </div>
      <hr
        style={{ backgroundColor: "GrayText", height: "0.5px", border: "none" }}
      />
    </>
  );
};

export default Header;
