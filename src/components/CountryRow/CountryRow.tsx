import React from "react";
import Image from "next/image";

import { COLUMN_NAMES } from "../GroupBox/GroupBox";

import styles from "./CountryRow.module.scss";

interface CountryRowProps {
  country: { name: string; flag: string };
}

function CountryRow({ country }: CountryRowProps) {
  return (
    <div key={country.name} className={styles.CountryRow}>
      <div className={styles.InfoBox}>
        <p>{country.name}</p>
        <Image alt={country.name} src={country.flag} width={50} height={35} />
      </div>
      {COLUMN_NAMES.map((name) => (
        <p key={name} className={styles.PointBox}>
          0
        </p>
      ))}
    </div>
  );
}

export default CountryRow;
