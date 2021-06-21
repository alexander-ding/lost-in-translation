import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = ({ language, otherLanguage, setShow }) => {
  return <Message negative style={{
    position: 'fixed',
    top: '2em',
    width: '80vw',
    zIndex: 10000,
    left: '10vw',
    right: '10vw',
  }} onDismiss={() => setShow(false)}>
    <Message.Header>Cannot complete operation on {language}</Message.Header>
    <p>Doing so would create a back-to-back translation with the same language {otherLanguage}</p>
  </Message>;
}

export default ErrorMessage;