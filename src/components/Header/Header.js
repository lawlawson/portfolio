import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}>
          <DiCode size='3rem' />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href='https://github.com/lawlawson'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        target='_blank'
        href='https://www.linkedin.com/in/lawlawson/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons target='_blank' href='https://twitter.com/lawsoncodes'>
        <AiFillTwitterCircle size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
