import React from "react";

import Button from "../Button";
import CountryRow from "../CountryRow";
import GroupSlideModal from "./GroupSlideModal";

import styles from "./GroupBox.module.scss";
import { Group } from "src/store/groupsSlice";

export const COLUMN_NAMES = ["Pts", "MP", "W", "D", "L", "GD"];

interface GroupBoxProps {
  group: { name: Group; countries: { name: string; flag: string }[] };
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
          {countries.map((country, index) => (
            <CountryRow
              key={country.name}
              country={country}
              groupName={group.name}
              countryKey={index}
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
