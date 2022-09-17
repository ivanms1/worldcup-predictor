import React from "react";
import CountryRow from "../CountryRow";

import styles from "./GroupBox.module.scss";

export const COLUMN_NAMES = ["Pts", "MP", "W", "D", "L", "GF", "GA", "GD"];

interface GroupBoxProps {
  group: { name: string; countries: { name: string; flag: string }[] };
}

function GroupBox({ group }: GroupBoxProps) {
  const { name, countries } = group;

  return (
    <div className={styles.GroupBox}>
      <p className={styles.Name}>{name}</p>
      <div className={styles.Navbar}>
        {COLUMN_NAMES.map((name) => (
          <p key={name} className={styles.NavbarItem}>
            {name}
          </p>
        ))}
      </div>
      <div className={styles.Countries}>
        {countries.map((country) => (
          <CountryRow key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default GroupBox;
