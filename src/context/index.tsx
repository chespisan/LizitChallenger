"use client";

import { SettingsProvider } from "app/context/settings-provider";
import { StoreProvider } from "app/context/store-provider";

export const ContextProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SettingsProvider>
      <StoreProvider>{children}</StoreProvider>
    </SettingsProvider>
  );
};
