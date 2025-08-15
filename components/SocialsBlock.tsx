'use client';

import { SiDiscord, SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si';
import Block from './Block';

export default function SocialsBlock() {
  return (
    <>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-red-500 md:col-span-3'
      >
        <a
          href='#'
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiYoutube />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: '-2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-green-500 md:col-span-3'
      >
        <a
          href='#'
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiGithub />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-blue-500 md:col-span-3'
      >
        <a
          href='#'
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiLinkedin />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: '-2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-[#31188b] md:col-span-3'
      >
        <a
          href='#'
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiDiscord />
        </a>
      </Block>
    </>
  );
}
