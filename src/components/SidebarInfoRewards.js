import React from 'react';
import useLanguage from 'hooks/useLanguage';
import { Text, Box, Card, CardBody, Flex, Link } from '@makerdao/ui-components-core';
import { getColor } from 'styles/theme';
import { ReactComponent as MarkerCayn } from 'images/landing/marker_cayn.svg';
import { ReactComponent as MarkerPurple } from 'images/landing/marker_purple.svg';

const SidebarInfoRewards = () => {
  const { lang } = useLanguage();
  return (
    <Box>
      <Card
        css={'overflow:hidden;'}
        pt="sm"
        style={{
          background: getColor('cardBg'),
          borderColor: getColor('border'),
          padding: '15px',
          color: getColor('greyText'),
          lineHeight: '32px',
        }}
      >
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.reward_page.info_box}
        </Text>
        <ul>
          <li>
            {lang.formatString(lang.reward_page.info_box_l1,
              <Link
                className="link_post"
                href="https://freeliquid.medium.com/freeliquid-rewards-distribution-a40b3de86dc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang.reward_page.info_box_link_meduim}
              </Link>,
              <Link
                className="link_post"
                href="https://freeliquid.io/wp/Freeliquid_WP_English.pdf"
                download=""
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang.reward_page.info_box_link_wp}
              </Link>
            )}
          </li>
          <li>{lang.reward_page.info_box_l2}</li>
          <li>
            {lang.formatString(lang.reward_page.info_box_l3,
              <MarkerCayn />,
              <MarkerPurple />
            )}</li>
          <li>{lang.reward_page.info_box_l4}</li>
          <li>{lang.reward_page.info_box_l5}</li>
        </ul>
      </Card>
    </Box>
  );
};

export default SidebarInfoRewards;
