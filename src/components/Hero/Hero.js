import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Lawrence.
        <br />
        Frontend Developer
      </SectionTitle>
      <SectionText>
        I specialise in solving problems using web technologies.
      </SectionText>
      <Button onClick={() => (window.location = 'https://dev.to/narhlawson')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
