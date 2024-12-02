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
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Newsletter</span> for
            <br /> Software Engineers
          </Title>
          <Text c="dimmed" mt="md">
            Allow me to send you monthly updates on software engineering, productivity, and clean code. I try to include
            something for everyone, from beginners to experienced developers, from technical to soft skills.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <FaRegCircleCheck size={20} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Technical Skills</b> – Java, Spring Frmaework, React and others
            </List.Item>
            <List.Item>
              <b>Soft Skills</b> – Producitvity, Time Management, Working in a Team
            </List.Item>
            <List.Item>
              <b>Latest Updates</b> – I try to stay up to date with latest trends, so you don't have to
            </List.Item>
          </List>

          <Group mt={30}>
            <Anchor href="https://kacper-does-software.beehiiv.com/subscribe">
              <Button radius="xl" size="md" className={classes.control}>
                {isMobile ? "Subscribe" : "Subscribe for free"}
              </Button>
            </Anchor>
            <Anchor href="https://kacper-does-software.beehiiv.com">
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                {isMobile ? "Learn more" : "View recent posts"}
              </Button>
            </Anchor>
          </Group>
        </div>
        <Container pt={20}>
          <Image src={"/images/newsletter_logo.png"} className={classes.image} style={{ borderRadius: "30px" }} />
        </Container>
      </div>
    </Container>
  );
};

export default NewsletterSubscriptionCard;
