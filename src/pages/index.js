import styles from './index.css';
// import { Button ,WhiteSpace} from 'antd-mobile';
import { Grid } from 'antd-mobile';

import router from 'umi/router';

const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
  url: `/Name${i}`
}));

const handleClick = (el, index) => {
  console.log(el, index);
  router.push(el.url);
}


function Page() {

  return (
    <div className={styles.normal}>
      <Grid data={data} activeStyle={false} onClick={handleClick} />
    </div>
  );
}

export default Page;
