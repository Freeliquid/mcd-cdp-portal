import styled from 'styled-components';
import { Box } from '@makerdao/ui-components-core';

const Button = styled(Box)`
  border-radius: 5px;
  border: 1px solid #00c4c4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: FT Base;
  font-style: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease 0s;
  cursor: pointer;
`;

const FilledButton = styled(Button)`
  color: #00c4c4;
  font-weight: bold;

  :hover {
    background-color: #00c4c4;
    color: #191e2b;
  }
`;

export { FilledButton };
