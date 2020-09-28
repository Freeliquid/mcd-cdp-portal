import React, { Fragment } from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import styled from 'styled-components';

import CDPList from 'components/CDPList';
import { Flex, Text } from '@makerdao/ui-components-core';
import { ReactComponent as BorrowIcon } from 'images/landing/borrow_block.svg';
import { Routes } from 'utils/constants';
import useLanguage from 'hooks/useLanguage';

import CDPDropdown from './CDPDropdown';

const StyledBorrowIcon = styled(BorrowIcon)`
  height: 40px;
  width: 30px;
`;

const BorrowNav = ({ viewedAddress, account, mobile, ...props }) => {
  const { url } = useCurrentRoute();
  const { lang } = useLanguage();
  const selected = url.pathname.startsWith(`/${Routes.BORROW}`);

  const address = account
    ? account.address
    : viewedAddress
    ? viewedAddress
    : null;

  const path = address
    ? `/${Routes.BORROW}/owner/${address}`
    : `/${Routes.BORROW}`;

  const textColor =
    selected && account
      ? 'white'
      : !selected && account
      ? 'gray'
      : selected && !account
      ? 'white'
      : 'gray';

  return (
    <Fragment>
      {mobile && selected ? (
        <CDPDropdown
          textcolor={textColor}
          selected={selected}
          account={account}
          {...props}
        >
          <CDPList
            mobile={mobile}
            currentPath={url.pathname}
            currentQuery={url.search}
            viewedAddress={address}
          />
        </CDPDropdown>
      ) : (
        <Link href={`${path}${url.search}`} style={{ color: '#F3F3F5' }}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py="s"
            {...props}
          >
            <StyledBorrowIcon
              textcolor={textColor}
              selected={selected}
              connected={account}
            />
            <Text t="p6" fontWeight="bold" color={textColor}>
              {lang.navbar.borrow}
            </Text>
          </Flex>
        </Link>
      )}
      {!mobile && (
        <CDPList
          currentPath={url.pathname}
          viewedAddress={address}
          currentQuery={url.search}
        />
      )}
    </Fragment>
  );
};

export default BorrowNav;
