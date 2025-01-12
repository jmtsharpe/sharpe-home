import styled from "@emotion/styled";
import supercoolImage from "../../assets/supercool.jpeg";
import { Page } from "../organisms/Page";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
  line-height: 1.6;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  max-width: 800px;
  text-align: left;
  margin-bottom: 20px;

  h2 {
    font-size: 1.8rem;
    color: #34495e;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const AboutMe = () => {
  return (
    <Page title="About Me" footerText="Always up for a project!">
      <Container>
        <Image src={supercoolImage} alt="About Me" />
        <Section>
          <p>
            I’m James Sharpe, a seasoned Principal Front-End Engineer with over
            nine years of experience designing scalable, innovative solutions.
            My career has been shaped by a passion for problem-solving and
            delivering high-quality software, currently showcased in my
            leadership at Sundiver Solutions, where I specialize in React,
            TypeScript, and micro front-end architectures. Whether improving
            component libraries or reducing load times by 30% at Brandfolder, I
            strive to blend technical excellence with user-centric design.
          </p>
          <p>
            Beyond the keyboard, I’m a creative soul. I love cooking up new
            recipes as much as I love crafting software, often finding
            inspiration in the flavors and techniques of global cuisines. Music
            is another outlet for my creativity—I enjoy playing guitar and
            exploring new sounds. Writing is a passion too, allowing me to
            articulate ideas and stories, from technical documentation to the
            occasional personal essay.
          </p>
          <p>
            And of course, I’m a devoted Dungeon Master, bringing stories to
            life in Dungeons & Dragons campaigns. Whether I’m leading a team at
            work or guiding adventurers on a quest, I aim to spark curiosity and
            collaboration in every endeavor.
          </p>
        </Section>
        <Section>
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <Link href="mailto:jmtsharpe@gmail.com">jmtsharpe@gmail.com</Link>
          </p>
          <p>
            GitHub:{" "}
            <Link
              href="https://github.com/jmtsharpe"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jmtsharpe
            </Link>
          </p>
          <p>
            LinkedIn:{" "}
            <Link
              href="https://linkedin.com/jmtsharpe"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/jmtsharpe
            </Link>
          </p>
        </Section>
      </Container>
    </Page>
  );
};

export { AboutMe };
