import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text color={"white"}>Home</Text>
      </Link>
      <Link to="/exchanges" style={{ textDecoration: 'none' }}>
        <Text color={"white"}>Exchanges</Text>
      </Link>
      <Link to="/coins" style={{ textDecoration: 'none' }}>
        <Text color={"white"}>Coins</Text>
      </Link>
    </HStack>
  );
};

export default Header;

