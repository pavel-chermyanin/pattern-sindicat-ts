import React from "react";
import {Outlet} from "react-router-dom";
import {Container, Content} from "rsuite";

import {Header} from "@widgets/header";

import styles from './main.module.scss'

export const Main: React.FC = () => {
  return (

    <Container className={styles.wrapper}>
      <Header/>
      <Content className={styles.main}>
        <Outlet/>
      </Content>

    </Container>


  );
};