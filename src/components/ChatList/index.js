import React, { useEffect } from 'react';

import ChatCard from './ChatCard';

import './chatList.scss';

/**
 * List of conversations
 * @param {conversations} ArrayOfObjects
 */
const ChatList = ({
  usersMails,
  id,
  nickname,
  saveConversations,
  selectInterlocutor,
}) => { 
  // Tri des messages recipient vs sender
  const currentUserSender = [];
  const currentUserRecipient = [];
  usersMails.forEach((element) => {
    if (element.sender_id === id) {
      currentUserSender.push(element);
    }
    else {
      currentUserRecipient.push(element);
    }
  });

  const messagesToUser = [];
  currentUserRecipient.map((subItem) => {
    if (!messagesToUser.some((item) => item.from === subItem.sender_id)) {
      messagesToUser.push({ from: subItem.sender_id, to: id });
    }
  });

  messagesToUser.map((item) => {
    item.messages = [];
    currentUserRecipient.map((itemRecipient) => {
      if (item.from === itemRecipient.sender_id) {
        item.messages.push({
          id: itemRecipient.id, content: itemRecipient.content, from: itemRecipient.sender_id, to: itemRecipient.recipient_id,
        });
      }
    });
  });

  const messagesFromUser = [];
  currentUserSender.map((subItem) => {
    if (!messagesFromUser.some((item) => item.to === subItem.recipient_id)) {
      messagesFromUser.push({ to: subItem.recipient_id, from: id });
    }
  });

  messagesFromUser.map((item) => {
    item.messages = [];
    currentUserSender.map((itemRecipient) => {      
      if (item.to === itemRecipient.recipient_id) {
        item.messages.push({
          id: itemRecipient.id, content: itemRecipient.content, from: itemRecipient.sender_id, to: itemRecipient.recipient_id,
        });
      }
    });
  });

  const usersConversations = [];
  let convId = 0;

  messagesFromUser.map((subItem) => {  
    if (!usersConversations.some((item) => item.and === subItem.to)) {
      usersConversations.push({
        id: convId += 1, between: id, and: subItem.to, messages: [subItem.messages],
      });
    }
  });
  let convIdUpdated = usersConversations.length;
  console.log(usersConversations);
  
  messagesToUser.map((subItem) => {
    if (!usersConversations.some((item) => item.and === subItem.from)) {      
      usersConversations.push({
        id: convIdUpdated += 1, between: id, and: subItem.from , messages: [subItem.messages],
      });
    }
  });

  usersConversations.map((subItem) => {
    messagesToUser.map((item) => {
      if (item.from === subItem.and) {
        item.messages.map((message) => {
          subItem.messages[0].push(message);
        });
      }
    });
  });

  useEffect(() => {
    saveConversations(usersConversations);
  }, []);

  return (
    <div className="chat-desktop">
      <div>
        <h1 className="contact-title">Mes contacts</h1>
      </div>
      <div className="chatList">
        {usersConversations.map((conversation) => {
          let currentNickname = '';
          let currentPicture = '';
          nickname.map((item) => {
            // console.log(item);
            if (item.id == conversation.and) {
              currentNickname = item.nickname;
              currentPicture = item.picture;
            }
          });
          const handleClick = () => (
            selectInterlocutor(conversation.and)
          );

          return (
            <ChatCard
              key={conversation.id}
              picture={currentPicture}
              name={currentNickname}
              newMessage="true"
              conversationId={conversation.id}
              id={conversation.and}
              manageClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
