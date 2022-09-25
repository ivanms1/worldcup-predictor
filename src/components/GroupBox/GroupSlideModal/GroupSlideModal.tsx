import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "src/store";

import SlideModal from "@/components/Drawer/Drawer";
import Button from "@/components/Button";

import { updateMatch } from "src/store/groupsSlice";

import styles from "./GroupSlideModal.module.scss";

interface GroupSlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  group: {
    name: string;
    countries: { name: string; flag: string; position: number }[];
  };
}

function GroupSlideModal({ isOpen, onClose, group }: GroupSlideModalProps) {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.groups[group.name].results);

  const orderedCountries = group.countries.sort((a, b) => {
    return a.position - b.position;
  });

  return (
    <SlideModal
      className={styles.GroupSlideModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h1 className={styles.Title}>Group {group.name}</h1>
      <div className={styles.Matchups}>
        {MATCHUPS.map((matchup, index) => {
          const country1 = orderedCountries[matchup[0]];
          const country2 = orderedCountries[matchup[1]];
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
                  value={results[index][matchup[0]]}
                  placeholder="0"
                  onChange={(e) =>
                    dispatch(
                      updateMatch({
                        group: group.name,
                        match: index,
                        result: {
                          country: matchup[0],
                          opponent: matchup[1],
                          score: Number(e.target.value),
                        },
                      })
                    )
                  }
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
                  value={results[index][matchup[1]]}
                  placeholder="0"
                  onChange={(e) =>
                    dispatch(
                      updateMatch({
                        group: group.name,
                        match: index,
                        result: {
                          country: matchup[1],
                          opponent: matchup[0],
                          score: Number(e.target.value),
                        },
                      })
                    )
                  }
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
        <Button type="button" onClick={onClose} variant="secondary">
          Close
        </Button>
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
