import { useState } from "react";

export interface ISettingsState {
  showModal: boolean;
}

const settingsState: ISettingsState = {
  showModal: false,
};

export const useSettingsState = () => {
  const [state, setState] = useState(settingsState);

  const setShowModal = () => {
    setState({ ...state, showModal: !state.showModal });
  };

  return {
    state,
    setShowModal,
  };
};
