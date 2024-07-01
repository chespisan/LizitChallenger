import { createContext } from "react";

import { useSettingsState } from "app/hooks";

export const SettingsContext = createContext({
  state: { showModal: false },
  setShowModal: () => {},
});

export const SettingsProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const settingsState = useSettingsState();
  return (
    <SettingsContext.Provider value={settingsState}>
      {children}
    </SettingsContext.Provider>
  );
};
