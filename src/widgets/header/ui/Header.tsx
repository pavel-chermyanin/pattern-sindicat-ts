import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import {Button, Header as HeaderRsuite} from "rsuite";

import styles from './header.module.scss'
import {Navbar} from "./navbar/Navbar.tsx";

export const Header = () => {

  return (
    <HeaderRsuite className={styles.header}>
      <img className={styles.image} src="/roomir-logo.png" alt="logo"/>
      <Navbar/>
      <Button className={styles.settingBtn}  startIcon={<GearCircleIcon/>}>
        Settings
      </Button>
    </HeaderRsuite>
  )
}