import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerContact}>
          <div className={styles.itemContact}>Email: joan.mas23@gmail.com</div>
          <div className={styles.itemContact}>
            On the Internet:{" "}
            <a
              className={styles.link}
              href={"https://www.linkedin.com/in/joan-mas-81810913a/"}
              target="_blank"
            >
              LinkedIn<AiFillLinkedin/>
            </a>
            ,
            <a
              className={styles.link}
              href={"https://github.com/Joan-Mas"}
              target="_blank"
            >
              GitHub<AiOutlineGithub/>
            </a>
            .
          </div>
        </div>
        <Background />
        <Menu />
      </main>
    </div>
  );
}

export default Contact;
