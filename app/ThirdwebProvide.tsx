"use client";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider,ChainId } from '@thirdweb-dev/react'

const ThirdwebProvide = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( 
        <ThirdwebProvider activeChain={Sepolia}>
            {children}
        </ThirdwebProvider>
     );
}
 
export default ThirdwebProvide;