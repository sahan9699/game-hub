import React from "react";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Opsss...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page dose not exits"
            : "Sorry unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
