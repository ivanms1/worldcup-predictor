import GroupBox from "@/components/GroupBox";

import groups from "@/assets/groups/groups.json";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>2022 Worldcup Predictor</h1>
      <p className={styles.Subtitle}>Have fun and share your predictions</p>
      <div className={styles.GroupsContainer}>
        {groups.map((group) => (
          <GroupBox key={group.name} group={group} />
        ))}
      </div>
    </div>
  );
}

export default Home;
