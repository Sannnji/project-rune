import { Box, Text, Button, Input, Center } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/form-control";

import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../services/useAuth";

export default function SignUp() {
  const auth = useAuth();
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      auth.login(values);
      history.push("/");
    },
  });

  return (
    <Center mt={16} flexDir="column">
      <Box color="#C7B377" p={4} borderRadius="md" textAlign="center">
        <form onSubmit={formik.handleSubmit}>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            type="text"
            borderColor="white"
            value={formik.values.username}
            onChange={formik.handleChange}
          />

          <FormLabel mt={2}>Password</FormLabel>
          <Input
            name="password"
            type="text"
            borderColor="white"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <FormLabel mt={2}>Confirm Password</FormLabel>
          <Input
            name="confirmPassword"
            type="text"
            borderColor="white"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />

          <Button type="submit" mt={4} w="100%">
            Sign Up
          </Button>
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
