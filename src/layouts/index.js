import styles from './index.css';
import withRouter from 'umi/withRouter';
import { Grid } from 'antd-mobile';
import router from 'umi/router';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
  url: `/Name${i}`
}));

const Layout = ({ location, children }) => {
  const handleClick = (el, index) => {
    router.push(el.url);
  }

  return (
    <div>
      <Grid data={data} activeStyle={false} onClick={handleClick} />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames='page'
          timeout={300}>
            {children}
        </CSSTransition>
      </TransitionGroup>
    </div>

  )
}


export default withRouter(Layout);
