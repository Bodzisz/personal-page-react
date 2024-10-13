import { Card, Text, Button, Center, Anchor, Group, useMantineTheme, Image } from "@mantine/core";
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
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <Center>
        <Image src={"../../images/newsletter_logo.png"} h={100} w={100} style={{ borderRadius: "10px" }} />
      </Center>
      <Center>
        <Group>
          <h2 fw={500}>Kacper Does Software Newsletter!</h2>
        </Group>
      </Center>

      <Center>
        <Text size="md">
          Do you want to get monthly software engineering updates and technical and soft skills knowledge? Subscribe to
          my monthly newsletter 👇
        </Text>
      </Center>

      <Anchor href="https://kacper-does-software.beehiiv.com/subscribe">
        <Button fullWidth mt="md" radius="md">
          Subscribe for free
        </Button>
      </Anchor>
    </Card>
  );
};

export default NewsletterSubscriptionCard;
