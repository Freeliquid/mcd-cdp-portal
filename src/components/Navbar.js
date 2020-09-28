import React from 'react';
import SaveNav from 'components/SaveNav';
import BorrowNav from 'components/BorrowNav';
import { Flex, Grid, Box } from '@makerdao/ui-components-core';
import useMaker from 'hooks/useMaker';
import { getColor } from 'styles/theme';

const Navbar = ({ viewedAddress }) => {
  const { account } = useMaker();

  return (
    <Box bg={account ? '#131824' : '#131824'} height="100%">
      <Flex alignItems="center" justifyContent="center" py="m" />
      <Grid mx="0px">
        <SaveNav account={account} />
        <BorrowNav viewedAddress={viewedAddress} account={account} />
      </Grid>
    </Box>
  );
};

export default Navbar;
