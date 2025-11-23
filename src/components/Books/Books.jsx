import React, { useState, useEffect } from "react";
import "./Books.css";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, SimpleGrid, Center, Container } from "@mantine/core";
import BookCard from "./Card/BookCard";
import SEO from "../SEO/SEO";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    fetch("/books.json")
      .then(res => res.json())
      .then(books => setBooks(books))
      .then(setLoading(false))
      .catch(e => {
        console.log(e);
        setHasError(true);
      });
  }, []);

  const getHelmetSeoTags = () => {
    return (
      <SEO
        title="Kacper Wojcicki - Book Reviews"
        description="Book Reviews by Kacper Wojcicki. Read about the latest books in software development, programming, productivity, psychology and self-development."
        canonical="https://kacper.software/books"
      />
    );
  };

  if (loading) return <div className="center-div" aria-busy="true"></div>;
  if (hasError) return <div className="center-div">Server Error :(</div>;

  return (
    <>
      {getHelmetSeoTags()}
      <Container mt={0} mb={100} size={"xl"} mih={"100vh"}>
        <Center>
          <SimpleGrid
            cols={isMobile ? 1 : 2}
            verticalSpacing={"xl"}
            spacing={"xl"}
          >
            {books.map(book => (
              <BookCard book={book} isMobile={isMobile} key={book.id} />
            ))}
          </SimpleGrid>
        </Center>
      </Container>
    </>
  );
}

export default Books;
