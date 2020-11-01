import React from 'react';

import { ReactComponent as BatIcon } from 'images/oasis-tokens/bat.svg';
import { ReactComponent as CompIcon } from 'images/oasis-tokens/comp.svg';
import { ReactComponent as DaiIcon } from 'images/oasis-tokens/dai.svg';
import { ReactComponent as EthIcon } from 'images/oasis-tokens/eth.svg';
import { ReactComponent as KncIcon } from 'images/oasis-tokens/knc.svg';
import { ReactComponent as LinkIcon } from 'images/oasis-tokens/link.svg';
import { ReactComponent as ManaIcon } from 'images/oasis-tokens/mana.svg';
import { ReactComponent as PaxIcon } from 'images/oasis-tokens/pax.svg';
import { ReactComponent as TusdIcon } from 'images/oasis-tokens/tusd.svg';
import { ReactComponent as UsdlIcon } from 'images/oasis-tokens/usdl.svg';
import { ReactComponent as UsdtIcon } from 'images/oasis-tokens/usdt.svg';
import { ReactComponent as UsdcIcon } from 'images/oasis-tokens/usdc.svg';
import { ReactComponent as WbtcIcon } from 'images/oasis-tokens/wbtc.svg';
import { ReactComponent as ZrxIcon } from 'images/oasis-tokens/zrx.svg';
import { ReactComponent as LpgIcon } from 'images/oasis-tokens/lpg.svg';
import { ReactComponent as UsdtUsdc } from 'images/oasis-tokens/usdt_usdc.svg';
import { ReactComponent as DefaultIcon } from 'images/oasis-tokens/default.svg';

const iconsByToken = {
  BAT: BatIcon,
  COMP: CompIcon,
  DAI: DaiIcon,
  ETH: EthIcon,
  KNC: KncIcon,
  LINK: LinkIcon,
  MANA: ManaIcon,
  PAX: PaxIcon,
  TUSD: TusdIcon,
  USDFL: UsdlIcon,
  USDT: UsdtIcon,
  LPG: LpgIcon,
  USDC: UsdcIcon,
  WBTC: WbtcIcon,
  ZRX: ZrxIcon,
  USDTUSDC: UsdtUsdc,
  USDTDAI: UsdtUsdc,
  USDCDAI: UsdtUsdc,
  USDTUSDN: UsdtUsdc,
  USDNDAI: UsdtUsdc,
  USDCUSDN: UsdtUsdc
};

const TokenIcon = ({ symbol, size = 70, ...props }) => {
  const Icon = iconsByToken[symbol.toUpperCase()] || DefaultIcon;

  return <Icon width={size} height={size} {...props} />;
};

export default TokenIcon;
