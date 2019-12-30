import React from 'react';

const style = {
  logoIcon: {
    width: 150,
    heigth: 100
  },
  bgDark: {
    backgroundColor: `transparent`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center tc mb5 animated">
    <h2>
    Do the Clicky thing on any image, don't click the same image twice!
    </h2>
  </article>
);

export default Banner;