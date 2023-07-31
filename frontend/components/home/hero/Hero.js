import { StandardButton } from "../../buttons/StandardButton";
import { Reveal } from "../../utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            WE R POTATOES<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            국내를 넘어 세계로 나아갈 수 있는 농업회사를 지향합니다.
            <div>
              <span>미래의 농업 생태계는 어떤모습일까요?</span>
            </div>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 5 years building and scaling software for
            some pretty cool companies. I also teach people to paint online
            (incase you&apos;ve got an empty canvas layin&apos; around 🎨).
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
