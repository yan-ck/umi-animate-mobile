import styles from './index.css';
import withRouter from 'umi/withRouter';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Layout = ({ location, children }) => (
  <TransitionGroup>
    <CSSTransition 
    key={location.pathname} 
    classNames='animate' 
    timeout={15000}>
      {children}
    </CSSTransition>
  </TransitionGroup>
)


export default withRouter(Layout);
