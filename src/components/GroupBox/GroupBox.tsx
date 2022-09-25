import React from "react";

import Button from "../Button";
import CountryRow from "../CountryRow";
import GroupSlideModal from "./GroupSlideModal";

import styles from "./GroupBox.module.scss";
import { store } from "src/store";

export const COLUMN_NAMES = ["Pts", "MP", "W", "D", "L", "GD"];

interface GroupBoxProps {
  group: {
    name: string;
    countries: { name: string; flag: string; position: number }[];
  };
}

function GroupBox({ group }: GroupBoxProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { name, countries } = group;

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setIsModalOpen(true)}
        className={styles.GroupBox}
      >
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
          {countries
            .sort((a, b) => {
              const countryAData =
                store.getState().groups[name].countriesData[a.position];
              const countryBData =
                store.getState().groups[name].countriesData[b.position];
              return (countryBData?.Pts ?? 0) - (countryAData?.Pts ?? 0);
            })
            .map((country) => (
              <CountryRow
                key={country.name}
                country={country}
                groupName={group.name}
                countryKey={country.position}
              />
            ))}
        </div>
      </Button>
      <GroupSlideModal
        isOpen={isModalOpen}
        group={group}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default GroupBox;
