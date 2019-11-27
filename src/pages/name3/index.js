import { connect } from 'dva';
import styles from './index.less';
function App({name3,dispatch}) {
    const { text,list } = name3;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}
export default connect(({name3})=>({name3}))(App);
