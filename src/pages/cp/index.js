import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';

import styles from './index.less';
function CP() {
  function to() {
    router.go(-1);
  }
  return (
    <div className={styles.normal}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={to}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>
      <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
        <p>text' is assigned a value but never used text' is assigned a value but never used </p>
    </div>
  );
}
export default CP;
