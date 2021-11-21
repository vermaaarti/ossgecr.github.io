import styles from "./style/About.module.css";
import ProfileCard from "../ui/ProfileCard";

const Members = () => {
  return (
    <div>
      <div className={styles.title}>
        <h2>Our team</h2>
      </div>
      <div className={styles.container}>
        <ProfileCard
          img="https://picsum.photos/id/1005/400/250"
          name="Test Name"
          role="Lead Developer"
          about="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
          github="https://github.com/firefox"
        />
        <ProfileCard
          img="https://picsum.photos/id/1005/400/250"
          name="Test Name"
          role="Lead Developer"
          about="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
        />
        <ProfileCard
          img="https://picsum.photos/id/1005/400/250"
          name="Test Name"
          role="Lead Developer"
          about="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
        />
        <ProfileCard
          img="https://picsum.photos/id/1005/400/250"
          name="Test Name"
          role="Lead Developer"
          about="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
        />
        <ProfileCard
          img="https://picsum.photos/id/1005/400/250"
          name="Test Name"
          role="Lead Developer"
          about="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
        />
      </div>
    </div>
  );
};

export default Members;
