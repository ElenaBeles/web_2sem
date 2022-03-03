import styles from './index.module.sass';
import {Header} from "../Header";
import {Footer} from "../Footer";


export const LayoutContainer = (props: any) => {
    const { children } = props;

    return(
        <div className = { styles.container }>
            <main>
                { children }
            </main>
            <Footer/>
        </div>
    )
}