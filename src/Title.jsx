import React from 'react';

export default function Title() {
  const currentTime = new Date().getHours();
  let title = '';

  if (currentTime >= 5 && currentTime < 11) title = 'Good morning!';
  else if (currentTime >= 11 && currentTime < 18) title = 'Good afternoon!';
  else if (currentTime >= 18 && currentTime < 0) title = 'Good evening!';
  else if (currentTime >= 0 && currentTime < 5) title = 'Good night!';
  else title = 'Hello!';

  return <h1 className='title'>{title}</h1>;
}
