import Contato from "../components/contato";
import Especialista from "../components/especialista";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Especialista />
      <Footer />
    </div>
  );
}
