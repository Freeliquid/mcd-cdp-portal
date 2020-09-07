import { useContext } from 'react';
import { watch } from 'hooks/useObservable';
import ilks from 'references/ilkList';
import { MakerObjectContext } from '../providers/MakerProvider';

export default function useCdpTypes() {
  const { network } = useContext(MakerObjectContext);
  console.log(network);
  console.log(ilks);

  const types = ilks.filter(ilk => ilk.networks.includes(network));
  console.log(types);
  const ceilings = watch.collateralDebtCeilings(types.map(type => type.symbol));

  if (!ceilings) {
    return { cdpTypes: [], cdpTypesList: [], gemTypeList: [] };
  }

  // console.log("ceilings");
  // console.log(ceilings);

  const cdpTypesWithNonZeroDebtCeilings = Object.entries(ceilings).reduce(
    (acc, [type, ceiling]) => {
      // console.log(type);
      // console.log(ceiling);
      return [...acc, type];
      // if (ceiling.gt(0)) return [...acc, type];
      // return acc;
    },
    []
  );

  // console.log(cdpTypesWithNonZeroDebtCeilings);

  const cdpTypes = types.reduce((acc, type) => {
    if (cdpTypesWithNonZeroDebtCeilings.some(t => type.symbol === t))
      return [...acc, type];
    return acc;
  }, []);

  // console.log(cdpTypes);

  const cdpTypesList = cdpTypes.reduce((acc, type) => {
    if (!acc.includes(type.key)) acc.push(type.key);
    return acc;
  }, []);

  const gemTypeList = cdpTypes.reduce((acc, type) => {
    if (!acc.includes(type.gem)) acc.push(type.gem);
    return acc;
  }, []);

  console.log(cdpTypesList);
  console.log(gemTypeList);

  return { cdpTypes, cdpTypesList, gemTypeList };
}
