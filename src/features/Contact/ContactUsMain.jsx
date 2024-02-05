import ContactUsLeftSide from "./ContactUsLeftSide";
import ContactUsRightSide from "./ContactUsRightSide";

import styles from "./ContactUsMain.module.css";

function ContactUsMain() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ContactUsLeftSide />
                <ContactUsRightSide />
            </div>
        </div>
    );
}

export default ContactUsMain;
