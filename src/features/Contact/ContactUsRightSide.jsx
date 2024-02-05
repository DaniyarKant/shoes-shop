import styles from "./ContactUsRightSide.module.css";

function ContactUsRightSide() {
    return (
        <div className={styles.contactInfo}>
            <h3>Contact Info</h3>
            <div>
                <p>
                    +48 555 666 777 <span>:Phone</span>
                </p>
            </div>
            <div>
                <p>
                    student@wsiz.edu.pl <span>:Email</span>
                </p>
            </div>
            <div>
                <p>
                    ul Sucharskiego 2<span>:Address</span>
                </p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/174/174855.png?ga=GA1.1.1996396776.1704679383&semt=ais"
                        alt=""
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1532/1532526.png?ga=GA1.1.1996396776.1704679383&semt=ais"
                        alt=""
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/174/174848.png?ga=GA1.1.1996396776.1704679383&semt=ais"
                        alt=""
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3046/3046132.png?ga=GA1.1.1996396776.1704679383&semt=ais"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUsRightSide;
