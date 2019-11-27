import { connect } from 'dva';
import styles from './index.less';
function App({name2,dispatch}) {
    const { text,list } = name2;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}
export default connect(({name2})=>({name2}))(App);
