import { useState } from "react";
import { Box, Text, Button, Input, Center } from "@chakra-ui/react";
import { FormLabel, FormControl } from "@chakra-ui/form-control";

import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import DatabaseService from "../services/database";

export default function SignUp() {
  let history = useHistory();

  const [message, setMessage] = useState("");

  const signUp = (values) => {
    DatabaseService.signup(values).then((response) => {
      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage(
          "Sign up successful you will be redirected to the home page"
        );
        setTimeout(() => history.push("/"), 3000);
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      values.password === values.confirmPassword
        ? signUp(values)
        : setMessage("Your passwords do not match");
    },
  });

  return (
    <Center mt={16} flexDir="column">
      <Text color="#C53030">{message}</Text>
      <Box color="#C7B377" p={4} borderRadius="md" textAlign="center">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              isRequired={true}
              borderColor="white"
              value={formik.values.username}
              onChange={formik.handleChange}
            />

            <FormLabel mt={2}>Password</FormLabel>
            <Input
              name="password"
              type="password"
              isRequired={true}
              borderColor="white"
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <FormLabel mt={2}>Confirm Password</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              borderColor="white"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />

            <Button type="submit" mt={4} w="100%">
              Sign Up
            </Button>
          </FormControl>
        </form>

        <Text my={4}>or</Text>

        <Link to="/signin">
          <Button w="100%" variant="outline">
            Have an account? Log In.
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
