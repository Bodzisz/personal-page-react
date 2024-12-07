import { Container, Center, Title, Image } from "@mantine/core";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

const BookReview = () => {
  const { title } = useParams();
  const titleFormatted = title.replace(/\s+/g, "").toLowerCase();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [reviewMd, setReviewMd] = useState("");

  useEffect(() => {
    fetch(`/reviews/${titleFormatted}.md`)
      .then(res => res.text())
      .then(review => setReviewMd(review))
      .then(setLoading(false))
      .catch(e => {
        console.log(e);
        setError(true);
      });
  }, []);

  return (
    <Container mih={"100vh}"} pb={20}>
      <Center pb={20}>
        <Image
          src={`/images/${titleFormatted}.jpg`}
          mah={"calc(100vh - 20px)"}
          maw={"calc(100vw - 20px)"}
          h={600}
          w={400}
          fit="fill"
          radius={20}
        />
      </Center>
      <Center pb={20}>
        <Title order={1}>{title}</Title>
      </Center>
      <Container>
        <Markdown
          components={{
            img(props) {
              const { src } = props;
              return (
                <Center>
                  <Image
                    src={src}
                    mah={"calc(100vh - 20px)"}
                    maw={"calc(100vw - 20px)"}
                    h={400}
                    w={800}
                    radius={20}
                    fit="fill"
                  />
                </Center>
              );
            }
          }}
        >
          {reviewMd}
        </Markdown>
      </Container>
    </Container>
  );
};

export default BookReview;
