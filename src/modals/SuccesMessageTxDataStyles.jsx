import styled from 'styled-components';

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e1f9e8;
  border: 1px solid #4caf50;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.show {
    opacity: 1;
  }
`;

export const SuccessIcon = styled.span`
  font-size: 24px;
  color: #4caf50;
  margin-right: 8px;
  margin-bottom: 8px;
`;


export const TxData = styled.div`
  margin-bottom: 8px;
`;

export const customStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '600px', // Reducir el valor original
      backgroundColor: 'white',
      padding: '40px', // Aumentar el valor original
      borderRadius: '4px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

