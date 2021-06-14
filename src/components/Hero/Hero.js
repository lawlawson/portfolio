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
        Lawrence Narh-Lawson
        <br />
        Frontend Developer.
      </SectionTitle>
      <SectionText>
        I specialise in solving problems using web technologies. My primary
        tools of choice are JavaScript and React.js.
      </SectionText>
      <Button onClick={() => (window.location = '#projects')}>Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
