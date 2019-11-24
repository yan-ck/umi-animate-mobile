import styles from './index.css';
import withRouter from 'umi/withRouter';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'dva';

const Layout = ({ location, children ,uam}) => (
  <TransitionGroup>
    <CSSTransition key={location.pathname} classNames={uam.animate} timeout={300}>
      {children}
    </CSSTransition>
  </TransitionGroup>
)


export default withRouter(connect(({ uam }) => ({ uam }))(Layout));
