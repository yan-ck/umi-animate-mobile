import styles from './index.css';
import { Button ,WhiteSpace} from 'antd-mobile';
import router from 'umi/router';
import { connect } from 'dva';

import Link from 'umi/link';



 function Page({dispatch}) {
  function to(){
    dispatch({
      type:'uam/save',
      payload:{
        animate:'left'
      }
    })
    router.push('/cp');
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <Button onClick={to}>Linkdefault</Button>
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
      <WhiteSpace />
    </div>
  );
}

export default connect(({ page }) => ({ page }))(Page);
