import React from 'react';
// import Script from 'next/script';

import './styles.css';
import drumAudio from './script.js';

export default function Home() {
  return(
    <>

      <h1 id="title">Drum 🥁 Kit</h1>
      <div class="set">
        <button class="w drum">w</button>
        <button class="a drum">a</button>
        <button class="s drum">s</button>
        <button class="d drum">d</button>
        <button class="j drum">j</button>
        <button class="k drum">k</button>
        <button class="l drum">l</button>

      </div>

      <drumAudio />

    </>
  )
}
