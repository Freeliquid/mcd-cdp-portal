import React from 'react';
import { Grid } from '@makerdao/ui-components-core';
import { colors } from '@makerdao/design-system-constants';
import { getColor } from '../../../styles/theme';
export default ({ children }) => (
  <Grid
    bg=""
    px="m"
    py="s"
    borderRadius="default"
    css={`
      & > div:not(:last-child) {
        border-bottom: 1px solid ${getColor('border')};
      }
    `}
  >
    {children}
  </Grid>
);
