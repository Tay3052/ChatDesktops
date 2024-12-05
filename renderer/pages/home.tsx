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
          <Link href="/auth/signup/signup">
            <span style={{ color: "#f08080" }}>Sign Up</span>
          </Link>
        </Text>
      </Center>

      <Center>
        <Box as={"p"} marginBottom={"10px"} opacity={0}>
          <Button type="button">
            <Link href={""}>SecretChatIsHere🤪</Link>
          </Button>
        </Box>
      </Center>
    </React.Fragment>
  );
}
