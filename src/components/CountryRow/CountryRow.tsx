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

function CountryRow({ country, groupName, countryKey }: CountryRowProps) {
  const countryData = useAppSelector(
    (state) => state.groups[groupName].countriesData[countryKey]
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
              {countryData ? countryData.GF - countryData.GA : 0}
            </p>
          );
        }
        return (
          <p key={name} className={styles.PointBox}>
            {/* @ts-expect-error - TS doesn't know that name is a key of countryData */}
            {countryData?.[name] ?? 0}
          </p>
        );
      })}
    </div>
  );
}

export default CountryRow;
