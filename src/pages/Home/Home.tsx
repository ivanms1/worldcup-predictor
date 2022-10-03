import toast from "react-hot-toast";
import { useRouter } from "next/router";

import GroupBox from "@/components/GroupBox";
import Button from "@/components/Button";

import { store } from "src/store";

import { COUNTRY_KEYS, GROUP_KEYS } from "src/const";

import groups from "@/assets/groups/groups.json";

import styles from "./Home.module.scss";

const ALL_MATCHES = 3;

function Home() {
  const router = useRouter();

  const handleNextRound = () => {
    const groupsFromState = store.getState().groups;

    const areAllMatchesPlayed = GROUP_KEYS.every((group) => {
      return COUNTRY_KEYS.every((country) => {
        return (
          groupsFromState?.[group]?.countriesData?.[country]?.MP === ALL_MATCHES
        );
      });
    });

    if (!areAllMatchesPlayed) {
      return toast("All matches must be played first");
    }

    router.push("/brackets");
  };

  return (
    <div className={styles.Container}>
      <p className={styles.Title}>2022 Worldcup Predictor</p>
      <p className={styles.Subtitle}>Have fun and share your predictions</p>
      <div className={styles.GroupsContainer}>
        {groups.map((group) => (
          <GroupBox key={group.name} group={group} />
        ))}
      </div>
      <Button onClick={handleNextRound}>Go to Round of 16</Button>
    </div>
  );
}

export default Home;
