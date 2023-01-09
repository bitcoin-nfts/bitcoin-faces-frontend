import { useAuth } from "@micro-stacks/react";
import styles from "../styles/Home.module.css";

export default function WalletConnectButton() {
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();

  const label = isSignedIn
    ? "Sign Out"
    : isRequestPending
    ? "Loading..."
    : "Connect Stacks Wallet";

  return (
    <button
      className={styles.walletbutton}
      title={label}
      onClick={() => {
        isSignedIn ? void signOut() : void openAuthRequest();
      }}
    >
      {label}
    </button>
  );
}
