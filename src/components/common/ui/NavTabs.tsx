import React from "react";
import { Tab, Tabs } from "@mui/material";
import Link from "../Link";

interface LinkTabProps {
  label?: string;
  href?: string;
}

export default function NavTabs(props) {
  const { sections } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      indicatorColor="secondary"
      aria-label="nav tabs horizontal"
    >
      {sections.map((section) => (
        <Tab
          component={Link}
          label={section.title}
          key={section.index}
          href={section.url}
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            handleChange
          }}
        />
      ))}
    </Tabs>
  );
}

// export function VerticalNavTabs(props) {
//   const { sections } = props;
//   const [value, setValue] = React.useState(0);
//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Tabs
//       orientation="vertical"
//       value={value}
//       onChange={handleChange}
//       textColor="inherit"
//       indicatorColor="secondary"
//       aria-label="nav tabs vertical"
//       sx={{ borderRight: 1, borderColor: "divider" }}
//     >
//       {sections.map((section) => (
//         <LinkTab label={section.title} to={section.url} key={section.title} />
//       ))}
//     </Tabs>
//   );
// }
