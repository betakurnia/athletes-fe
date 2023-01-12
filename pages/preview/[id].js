import React from "react";
import { Container, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Profile from "../../components/Profile";
import httpClient from "../../utils/httpClient";

const Preview = ({ data }) => {
  const router = useRouter();

  return (
    <Box my={5}>
      <Container maxWidth="sm">
        <Profile
          isEditable={false}
          name={data.name}
          sports={data.sports}
          gender={data.gender}
          dateOfBirth={data.dateOfBirth}
          description={data.description}
          location={data.location}
          team={data.team}
          interests={data.interests}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push(`/`);
          }}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
};

export default Preview;

export async function getServerSideProps(context) {
  const response = await httpClient.get(`/api/profile?id=${context.query.id}`);

  return {
    props: { id: context.query.id || null, data: response.data },
  };
}
