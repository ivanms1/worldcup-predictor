import React from "react";
import Button from "../Button";
import CountryRow from "../CountryRow";

import styles from "./GroupBox.module.scss";

export const COLUMN_NAMES = ["Pts", "MP", "W", "D", "L", "GD"];

interface GroupBoxProps {
  group: { name: string; countries: { name: string; flag: string }[] };
}

function GroupBox({ group }: GroupBoxProps) {
  const { name, countries } = group;

  return (
    <Button variant="ghost" className={styles.GroupBox}>
      <div className={styles.Navbar}>
        <p className={styles.Name}>{name}</p>
        <div className={styles.Columns}>
          {COLUMN_NAMES.map((name) => (
            <p key={name} className={styles.NavbarItem}>
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.Countries}>
        {countries.map((country) => (
          <CountryRow key={country.name} country={country} />
        ))}
      </div>
    </Button>
  );
}

export default GroupBox;
