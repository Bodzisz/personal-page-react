import { Card, Text, Button, Center, Anchor, Group, useMantineTheme, Image, Title } from "@mantine/core";
import { BsMedium, BsNewspaper } from "react-icons/bs";
import { useMediaQuery } from "@mantine/hooks";

const NewsletterSubscriptionCard = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Card
      w={isMobile ? "90%" : "50%"}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <Center>
        <Image src={"../../images/newsletter_logo.png"} h={100} w={100} style={{ borderRadius: "10px" }} />
      </Center>
      <Center>
        <Group>
          <Title pb={20} fw={500} c={"var(--mantine-color-white)"}>
            Kacper Does Software Newsletter!
          </Title>
        </Group>
      </Center>

      <Center pb={10}>
        <Text size="md" c={"var(--mantine-color-white)"} style={{ textAlign: "center" }}>
          Do you want to get monthly software engineering updates and technical and soft skills knowledge? Subscribe to
          my monthly newsletter 👇
        </Text>
      </Center>

      <Anchor href="https://kacper-does-software.beehiiv.com/subscribe">
        <Center>
          <Button fullWidth mt="md" radius="md" maw={300}>
            Subscribe for free
          </Button>
        </Center>
      </Anchor>
    </Card>
  );
};

export default NewsletterSubscriptionCard;
