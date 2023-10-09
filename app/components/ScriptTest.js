import React, { useEffect } from 'react';

export default function scriptTest() {
  useEffect(() => {
    alert('Hello');
  }, []);

  return null;
}
