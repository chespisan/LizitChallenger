"use client";

import { SettingsProvider } from "./settings-provider";
import { StoreProvider } from "./store-provider";

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
