import React from 'react';
import Block from './Block';

export default function AboutBlock() {
  return (
    <Block className='col-span-12 text-3xl leading-snug'>
      <p>
        My passion is building cool stuff.{' '}
        <span className='text-zinc-400'>
          I build primarily with React, Tailwind CSS, Framer Motion and NestJS,
          ExpressJS. I love this stack so much that I even built a website about
          it.
        </span>
      </p>
    </Block>
  );
}
