import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Heading,
  Box,
  Button,
  Container,
  Grid,
  Text,
  Input,
  Center,
} from "@yamada-ui/react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Center margin={"20px 0 40px 0"}>
        <Heading as={"h1"} fontSize={"2rem"}>
          You get Secure Talking to Anyone!!
        </Heading>
      </Center>

      <Center alignItems={"center"}>
        <form>
          <Input
            margin={"20px 0"}
            type="text"
            id="emali"
            placeholder="YOUR E-MAIL"
          />
          <Input
            type="password"
            id="password"
            placeholder="YOUR PASSWORD"></Input>
          <Button type="submit" color={"primary"} margin={"20px 0"}>
            Login
          </Button>
        </form>
      </Center>

      <Center>
        <Text margin={"20px 0"}>
          If you don't have an account, please{" "}
          <Link href="/signup">Sign Up</Link>
        </Text>
      </Center>
    </React.Fragment>
  );
}
