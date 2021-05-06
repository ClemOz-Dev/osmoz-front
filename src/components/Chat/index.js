// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

// == Import
import Message from 'src/containers/Chat/Message';
import Form from 'src/containers/Chat/Form';
import {compare} from 'src/utils'
import './chat.scss';

// == Composant

const Chat = ({ conversations, nickname }) => {
  const { id } = useParams();
  const history = useHistory();
  function handleClick() {
    history.push('/messagerie');
  }
  let currentConversation = {};
  conversations.map((conversation) => {
    if (conversation.and == id) {
      currentConversation = conversation;
    }
  });  
  
  const currentConv = currentConversation.messages[0];
  
  currentConv.sort(compare);
  // console.log(currentConv);

  const refMessagesContainer = useRef(null);
  useEffect(() => {
    refMessagesContainer.current.scrollTo({

      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      // scroll progressive
      behavior: 'smooth',
    });
  }, [conversations]);

  return (
    <div>
      <div className="chat-container">
        <button type="button" onClick={handleClick} className="closeChat">Revenir à mes contacts</button>
        <div className="chat" ref={refMessagesContainer}>
          {currentConv.map((message) => (
            <div key={message.id}>
              <Message key={message.id} nickname={nickname} {...message} />
            </div>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Chat;
