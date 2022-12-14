import React from "react";
import { ChainId } from "@opensale/sdk";
interface Props {
    account: string;
    chainId: ChainId;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
