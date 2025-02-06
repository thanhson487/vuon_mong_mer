import { CloseCircleFilled } from "@ant-design/icons";

export const CloseButton = ({onClose}) => (
  <CloseCircleFilled onClick={onClose} style={styles} /> 
);

const styles = {
  position: 'absolute',
  top: '70px',
  right: '10px',
  fontSize: '30px',
  cursor: 'pointer',

  zIndex: 1000,
};