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
  ScrollArea,
  Text
} from "@mantine/core";
import { Link } from "react-router-dom";

export const formatBookTitle = title => title.replace(/\s+/g, "").toLowerCase();

function BookCard({ book, isMobile }) {
  const cardDimensions = {
    width: isMobile ? 300 : 400,
    height: isMobile ? 430 : 600
  };

  return (
    <Card radius={20} m={0} p={0} className="glass" bg="transparent">
      <BackgroundImage
        src={`../../images/${book.image}`}
        h={cardDimensions.height}
        w={cardDimensions.width}
        className={classes.cardBackground}
        radius={20}
      >
        <Card.Section
          pos={"absolute"}
          bottom={0}
          bg={"rgba(0, 0, 0, 0.6)"}
          w={"100%"}
          pb={20}
          pt={10}
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Center
            pb={isMobile ? 10 : 30}
            pt={10}
            c={"white"}
          >
            <Title order={3} style={{ fontFamily: "Bungee, sans-serif" }}>{book.title}</Title>
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
                  <Group justify="center">
                    {book.topics.map(topic => (
                      <Badge variant="outline" color="gray.5" key={topic}>
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
                c={"dimmed"}
              >
                <Text size="sm" style={{ fontFamily: "Inter, sans-serif" }} c="white">
                  {book.desc}
                </Text>
              </ScrollArea>
            </Spoiler>
            <Center pt={10}>
              <Link
                key={book.title}
                to={`/books/${formatBookTitle(book.title)}`}
              >
                <Button variant="outline" color="gray.5" radius="xl">Read full review</Button>
              </Link>
            </Center>
          </Container>
        </Card.Section>
      </BackgroundImage>
    </Card>
  );
}

export default BookCard;
