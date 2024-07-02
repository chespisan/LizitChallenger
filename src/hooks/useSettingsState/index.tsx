import { useState } from "react";

export interface ISettingsState {
  showModal: boolean;
  type?: string;
  info?: any;
}

const settingsState: ISettingsState = {
  showModal: false,
};

export const useSettingsState = () => {
  const [state, setState] = useState(settingsState);

  const setShowModal = (type?: string, info?: any) => {
    setState({ ...state, showModal: !state.showModal, type, info });
  };

  return {
    state,
    setShowModal,
  };
};
