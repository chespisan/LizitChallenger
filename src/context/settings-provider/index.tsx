import { createContext } from "react";

import { useSettingsState } from "app/hooks";
import { ISettingsContext } from "app/context/settings-provider/interface";

export const SettingsContext = createContext<ISettingsContext>({
  state: {
    showModal: false,
    type: undefined,
    info: undefined,
  },
  setShowModal: (type?: string, info?: any) => {},
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
