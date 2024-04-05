import React, { useEffect, useState } from "react";

const NavItemCollapse = ({
  title,
  children,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (activeNavName !== name) {
      setIsChecked(false);
    }
  }, [activeNavName, name]);

  return (
    <div className="d-collapse-arrow d-collapse min-h-0 rounded-none bg-base-200 py-2">
      <input
        type="checkbox"
        className="min-h-0 py-0"
        checked={name === activeNavName}
        onChange={() => {
          setActiveNavName(name);
          setIsChecked(!isChecked);
        }}
      />
      <div
        className={`d-collapse-title flex min-h-0 items-center gap-x-2 py-0 pl-0 text-lg font-medium ${
          name === activeNavName
            ? "font-bold text-primary"
            : "font-semibold text-[#A5A5A5]"
        }`}
      >
        {icon}
        {title}
      </div>
      <div className="d-collapse-content">
        <div className="mt-2 flex flex-col gap-y-2">{children}</div>
      </div>
    </div>
  );
};

export default NavItemCollapse;
