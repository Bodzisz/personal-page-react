import {
  Card,
  Text,
  Button,
  Center,
  Anchor,
  Group,
  useMantineTheme,
  Image,
  Title,
  Container,
  List,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./NewsletterSubscriptionCard.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";

const NewsletterSubscriptionCard = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="md">
      <Card className="glass" radius="xl" p="xl" bg="transparent">
        <Stack align="center" gap="lg">
          <Title order={2} size={isMobile ? "h2" : "h1"} mt="lg" style={{ fontFamily: "Inter, sans-serif", textAlign: "center" }}>
            <Text span inherit variant="gradient" gradient={{ from: 'violet', to: 'cyan' }}>Newsletter</Text> for
            <br /> Software Engineers
          </Title>

          <Image
            src={"/images/newsletter_logo.png"}
            w={300}
            radius="md"
          />

          <Text c="dimmed" ta="center" maw={600}>
            Allow me to send you monthly updates on software engineering, productivity, and clean code. I try to include
            something for everyone, from beginners to experienced developers, from technical to soft skills.
          </Text>

          <List
            spacing="sm"
            size="sm"
            center
            icon={
              <ThemeIcon size={20} radius="xl" color="violet" variant="light">
                <FaRegCircleCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Technical Skills</b> – Java, Spring Framework, React and others
            </List.Item>
            <List.Item>
              <b>Soft Skills</b> – Productivity, Time Management, Working in a Team
            </List.Item>
            <List.Item>
              <b>Latest Updates</b> – I try to stay up to date with latest trends, so you don't have to
            </List.Item>
          </List>

          <Group mt="md" justify="center" wrap="nowrap" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <Anchor href="https://kacper-does-software.beehiiv.com/subscribe" underline="never" w={isMobile ? "100%" : "auto"}>
              <Button radius="xl" size="md" color="violet" fullWidth={isMobile}>
                {isMobile ? "Subscribe" : "Subscribe for free"}
              </Button>
            </Anchor>
            <Anchor href="https://kacper-does-software.beehiiv.com" underline="never" w={isMobile ? "100%" : "auto"}>
              <Button variant="default" radius="xl" size="md" fullWidth={isMobile}>
                {isMobile ? "Learn more" : "View recent posts"}
              </Button>
            </Anchor>
          </Group>
        </Stack>
      </Card>
    </Container>
  );
};

export default NewsletterSubscriptionCard;
