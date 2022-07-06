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
        I am a passionate, self-motivated, front end web developer specialising
        in React, who is continually learning and dedicated to delivering
        high-impact digital products with a focus on quality testing, web
        optimisation and accessibility.
      </SectionText>
      {/* <Button onClick={() => (window.location = '#projects')}>Projects</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
