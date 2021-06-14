import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiJavascript1,
  DiSass,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a number of different Languages, Frameworks and
      Technologies, below are a few of the ones I am most familiar with.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='10rem' />
        <ListContainer>
          <ListTitle>React.js</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size='10rem' />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size='10rem' />
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size='10rem' />
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size='10rem' />
        <ListContainer>
          <ListTitle>Sass</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size='10rem' />
        <ListContainer>
          <ListTitle>Node.js</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size='10rem' />
        <ListContainer>
          <ListTitle>Git</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size='10rem' />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size='10rem' />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
