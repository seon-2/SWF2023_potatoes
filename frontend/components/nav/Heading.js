import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import WalletLogIn from "../templates/WallerLogin";

export const Heading = ({ account, setAccount }) => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <WalletLogIn account={account} setAccount={setAccount} />
    </header>
  );
};
