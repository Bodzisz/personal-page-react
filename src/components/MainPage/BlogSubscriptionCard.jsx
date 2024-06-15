import { Card, Text, Button, Center, Anchor, Group, useMantineTheme } from "@mantine/core";
import { BsMedium } from "react-icons/bs";
import { useMediaQuery } from "@mantine/hooks";

const BlogSubscriptionCard = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Card
      w={isMobile ? "90%" : "50%"}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <Center>
        <BsMedium size={30} />
      </Center>
      <Center>
        <Group>
          <h2 fw={500}>Get an email whenever I post</h2>
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
