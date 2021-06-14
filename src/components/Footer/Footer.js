import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; Lawrence Narh-Lawson 2021</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/lawlawson'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/lawlawson/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/lawsoncodes'>
          <AiFillTwitterCircle size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
