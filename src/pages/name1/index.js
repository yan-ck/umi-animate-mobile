import { connect } from 'dva';
import styles from './index.less';
function App({name1,dispatch}) {
    const { text,list } = name1;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}
export default connect(({name1})=>({name1}))(App);
