import React, { useState } from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import styled from 'styled-components';
import { Flex, Text, Box } from '@makerdao/ui-components-core';

import { ReactComponent as SaveIcon } from 'images/landing/save_block.svg';
import { Routes } from '../utils/constants';
import useLanguage from 'hooks/useLanguage';
import Modal from 'react-modal';
import { getColor } from 'styles/theme';

Modal.setAppElement('#root');

const StyledSaveIcon = styled(SaveIcon)`
  width: 40px;
  height: 30px;
`;

const SaveNav = ({ account, ...props }) => {
  const { lang } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { url } = useCurrentRoute();
  const selected = url.pathname.startsWith(`/${Routes.SAVE}`);

  const textColor =
    selected && account
      ? '#F3F3F5'
      : !selected && account
      ? '#6F7A96'
      : selected && !account
      ? '#6F7A96'
      : '#6F7A96';

  const iconColor =
      selected && account
        ? '1'
        : !selected && account
        ? '0.35'
        : selected && !account
        ? '1'
        : '0.5';

  const saveUrl = account?.address
    ? `/${Routes.SAVE}/owner/${account?.address}${url.search}`
    : `/${Routes.SAVE}${url.search}`;
  return (
    <Box>
    <Link onClick={() => setModalIsOpen(true)}>
      <Flex
        bg={!account && selected && '#0B0E15'}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="s"
        {...props}
      >
        <StyledSaveIcon
          textcolor={textColor}
          opacity={iconColor}
          selected={selected}
          connected={account}
          
        />
        <Text t="p6" fontWeight="bold" color={textColor}>
          {lang.navbar.save}
        </Text>
      </Flex>
    </Link>
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              background: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
              background: '#222B3F',
              border: 'none',
              width: '25%',
              height: '30%',
              margin: 'auto',
              textAlign: 'center'
            }
          }}
        >
          <Text.h4
            style={{
              color: getColor('whiteText'),
              padding: '20px 10px'
            }}
          >
            {lang.landing_page.banner_in_progress}
          </Text.h4>
          <Text
          style={{
              color: getColor('greyText'),
              padding: '20px 10px'
            }}>
          The Save module has not been launched yet, please wait for further updates!
          </Text>
          <button className="close_btn" onClick={() => setModalIsOpen(false)}>
            &times;
          </button>
        </Modal>
        </Box>
  );
};

export default SaveNav;
