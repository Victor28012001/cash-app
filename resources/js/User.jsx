import React from "react";
import { createRoot } from "react-dom/client";
import routes from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  trustWallet,
} from "@thirdweb-dev/react";
import { Ethereum, Polygon, Dogechain } from "@thirdweb-dev/chains";

if (document.getElementById("user")) {
    const container = document.getElementById("user");
    const root = createRoot(container);
    root.render(
        <ThirdwebProvider activeChain="ethereum" 
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} 
        supportedWallets={[metamaskWallet(), coinbaseWallet(), trustWallet()]} 
        supportedChains={[Ethereum, Polygon, Dogechain]}>
            <React.StrictMode>
                <RouterProvider router={routes} />
            </React.StrictMode>
        </ThirdwebProvider>
    );
}
