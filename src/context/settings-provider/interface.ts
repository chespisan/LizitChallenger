export interface ISettingsContext {
  state: {
    showModal: boolean;
    type?: string;
    info?: any;
  };
  setShowModal: (type?: string, info?: any) => void;
}
