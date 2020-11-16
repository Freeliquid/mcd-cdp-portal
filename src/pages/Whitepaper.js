import React from 'react';
import { hot } from 'react-hot-loader/root';

import MarketingLayout from '../layouts/MarketingLayout';
import LegalTextLayout from '../layouts/LegalTextLayout';

const Whitepaper = () => (
  <MarketingLayout>
    <LegalTextLayout style={{minHeight: '80vh'}}>
      <h1>White peper</h1>
      <span className="subheading">Last updated: 30 October 2020</span>

    </LegalTextLayout>
  </MarketingLayout>
);

export default hot(Whitepaper);
