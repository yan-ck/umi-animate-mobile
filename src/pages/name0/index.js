import styles from './index.less';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';

function App() {
    const handleClick = (el, index) => {
        console.log(el, index);
        router.go(-1);
    }
    return (
        <div className={styles.normal}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={handleClick}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >NavBar</NavBar>
            <h2>
                name0
            </h2>
        </div>
    );
}
export default App;
