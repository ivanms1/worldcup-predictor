import React from "react";
import Image from "next/image";

import { useAppSelector } from "src/store";

import { COLUMN_NAMES } from "../GroupBox/GroupBox";

import styles from "./CountryRow.module.scss";

interface CountryRowProps {
  country: { name: string; flag: string };
  groupName: string;
  countryKey: number;
}

const resultKeys = [0, 1, 2, 3, 4, 5];

function CountryRow({ country, groupName, countryKey }: CountryRowProps) {
  const results = useAppSelector((state) => state.groups[groupName].results);

  const countryData: { [key: string]: number } = resultKeys.reduce(
    (acc, next) => {
      if (results[next][countryKey] || results[next][countryKey] === 0) {
        const matchupKeys = Object.keys(results[next]);
        const oppositionCountryKey = matchupKeys.find(
          (key) => key !== String(countryKey)
        );
        const countryGoals = results[next][countryKey];
        const oppositionGoals = results[next][+oppositionCountryKey!];

        acc.GF = acc.GF + countryGoals;
        acc.GA = acc.GA + oppositionGoals;
        acc.MP++;

        if (countryGoals > oppositionGoals) {
          acc.W += 1;
          acc.Pts += 3;
        }
        if (countryGoals === oppositionGoals) {
          acc.D += 1;
          acc.Pts += 1;
        }
        if (countryGoals < oppositionGoals) {
          acc.L += 1;
        }
      }

      return acc;
    },
    { GF: 0, GA: 0, Pts: 0, W: 0, D: 0, L: 0, MP: 0 }
  );

  return (
    <div key={country.name} className={styles.CountryRow}>
      <div className={styles.InfoBox}>
        <p>{country.name}</p>
        <Image alt={country.name} src={country.flag} width={50} height={35} />
      </div>
      {COLUMN_NAMES.map((name) => {
        if (name === "GD") {
          return (
            <p key={name} className={styles.PointBox}>
              {countryData.GF - countryData.GA}
            </p>
          );
        }
        return (
          <p key={name} className={styles.PointBox}>
            {countryData[name]}
          </p>
        );
      })}
    </div>
  );
}

export default CountryRow;
