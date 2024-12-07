import React from "react";
import classes from "./BookCard.module.css";
import {
  Anchor,
  Card,
  Center,
  Title,
  Button,
  Group,
  Badge,
  BackgroundImage,
  Container,
  Spoiler,
  ScrollArea
} from "@mantine/core";
import { Link } from "react-router-dom";

export const formatBookTitle = title => title.replace(/\s+/g, "").toLowerCase();

function BookCard({ book, isMobile }) {
  const cardDimensions = {
    width: isMobile ? 300 : 400,
    height: isMobile ? 430 : 600
  };

  return (
    <Card radius={20} m={0} p={0}>
      <BackgroundImage
        src={`../../images/${book.image}`}
        h={cardDimensions.height}
        w={cardDimensions.width}
        className={classes.cardBackground}
      >
        <Card.Section
          pos={"absolute"}
          bottom={0}
          bg={"rgba(0, 0, 0, 0.8)"}
          w={"100%"}
          pb={20}
          pt={10}
        >
          <Center
            pb={isMobile ? 10 : 30}
            pt={10}
            c={"var(--mantine-color-white)"}
          >
            <Title order={3}>{book.title}</Title>
          </Center>

          <Container pb={10}>
            <Spoiler
              maxHeight={70}
              showLabel="Show more"
              hideLabel="Hide"
              pb={30}
            >
              <ScrollArea
                w={cardDimensions.width - 40}
                h={120}
                scrollbars="y"
                pb={10}
              >
                <Center pt={10} pb={10}>
                  <Group>
                    {book.topics.map(topic => (
                      <Badge variant="outline" color="var(--primary-hover)">
                        {topic}
                      </Badge>
                    ))}
                  </Group>
                </Center>
              </ScrollArea>

              <ScrollArea
                w={cardDimensions.width - 40}
                h={isMobile ? 120 : 270}
                scrollbars="y"
                c={"var(--mantine-color-white)"}
              >
                {book.desc}
              </ScrollArea>
            </Spoiler>
            <Center pt={10}>
              <Link
                key={book.title}
                to={`/books/${formatBookTitle(book.title)}`}
              >
                <Button>Read full review</Button>
              </Link>
            </Center>
          </Container>
        </Card.Section>
      </BackgroundImage>
    </Card>
  );
}

export default BookCard;
