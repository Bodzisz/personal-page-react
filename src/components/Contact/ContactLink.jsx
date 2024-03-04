import { Center, Text, Group, Anchor, Container } from "@mantine/core";
import classes from "./Contact.module.css";

const ContactLink = ({ name, link, icon }) => {
  return (
    <Container pb={40} miw={200}>
      <Anchor href={link} underline="never">
        <Center p={10} className={classes.contactLink}>
          <Group>
            {icon}
            <Text>{name}</Text>
          </Group>
        </Center>
      </Anchor>
    </Container>
  );
};

export default ContactLink;
