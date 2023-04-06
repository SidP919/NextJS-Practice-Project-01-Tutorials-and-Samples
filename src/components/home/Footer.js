import Link from 'next/link';
import styles from './../../styles/footer.module.scss'
const Footer = () => {
    return(
        <div className={styles.footerStyle}>
            <a href='https://github.com/SidP919/NextJS-Practice-Project-01-Tutorials-and-Samples'>
                <p>Copyright &#64; 2023</p>
                <p>GitHub.com/sidp919</p>
            </a>
        </div>
    )
}

export default Footer;