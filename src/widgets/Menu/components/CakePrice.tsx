import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    padding: 0 15px;
    background-color: ${({ theme }) => theme.colors.priceBackground};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const PriceText = styled(Text)`
  color: ${({ theme }) => theme.colors.card};
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink>
      <PancakeRoundIcon width="24px" mr="8px" />
      <PriceText color="text" bold>{`$${cakePriceUsd.toFixed(3)}`}</PriceText>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
