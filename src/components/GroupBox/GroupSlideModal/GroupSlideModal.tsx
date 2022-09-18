import React from "react";
import Image from "next/image";
import clsx from "clsx";

import SlideModal from "@/components/Drawer/Drawer";
import Button from "@/components/Button";

import styles from "./GroupSlideModal.module.scss";

interface GroupSlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  group: { name: string; countries: { name: string; flag: string }[] };
}

function GroupSlideModal({ isOpen, onClose, group }: GroupSlideModalProps) {
  return (
    <SlideModal
      className={styles.GroupSlideModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h1 className={styles.Title}>Group {group.name}</h1>
      <div className={styles.Matchups}>
        {MATCHUPS.map((matchup) => {
          const country1 = group.countries[matchup[0]];
          const country2 = group.countries[matchup[1]];
          return (
            <div key={matchup.join("")} className={styles.Matchup}>
              <div className={clsx(styles.MatchupCountry, styles.left)}>
                <p className={styles.MatchupCountryName}>{country1.name}</p>
                <Image
                  alt={country1.name}
                  src={country1.flag}
                  width={50}
                  height={35}
                />
                <input
                  type="number"
                  className={styles.ScoreInput}
                  min={0}
                  step={1}
                />
              </div>
              <div className={clsx(styles.MatchupCountry, styles.right)}>
                <input
                  type="number"
                  className={styles.ScoreInput}
                  min={0}
                  step={1}
                />
                <Image
                  alt={country2.name}
                  src={country2.flag}
                  width={50}
                  height={35}
                />
                <p className={styles.MatchupCountryName}>{country2.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.ActionSection}>
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onClose}>Save</Button>
      </div>
    </SlideModal>
  );
}

export default GroupSlideModal;

const MATCHUPS = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [0, 3],
  [1, 2],
];
