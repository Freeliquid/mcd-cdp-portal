import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from 'images/animation/PC_version.json';

class AnimationLottie extends Component {
  render() {
    const defaultOptions = {
      autoplay: true,
      animationData: animationData
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
  }
}

export default AnimationLottie;
