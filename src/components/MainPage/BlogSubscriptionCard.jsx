import { Card, Text, Button, Center, Anchor, Group } from "@mantine/core";
import { BsMedium } from "react-icons/bs";

const BlogSubscriptionCard = () => {
  return (
    <Card w={"50%"} shadow="sm" padding="lg" radius="md" withBorder style={{ background: "rgba(0, 0, 0, 0.3)" }}>
      <Center>
        <Group>
          <h2 fw={500}>Get an email whenever I post</h2>
          <BsMedium size={30} />
        </Group>
      </Center>

      <Center>
        <Text size="md">
          I run my blog on Medium. I write about software enginnering, clean code, java, productivity and much more.
          Don't miss any of my articles!
        </Text>
      </Center>

      <Anchor href="https://medium.com/@kacper_wojcicki/subscribe">
        <Button fullWidth mt="md" radius="md">
          Subscribe for free
        </Button>
      </Anchor>
    </Card>
  );
};

export default BlogSubscriptionCard;
