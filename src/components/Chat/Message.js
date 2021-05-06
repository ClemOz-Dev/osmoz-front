import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({
  nickname, from, content, isOwn,
}) => {
  const cssClass = classNames('message', {
    'message--own': isOwn,
  });
  const cssClassAuthor = classNames('message-author', {
    'message-author--own': isOwn,
  });

  return (
    <div className={cssClass}>
      <div className={cssClassAuthor}>{nickname.map((item) => {
        if (from == item.id) {
          return (item.nickname);
        }
      })}
      </div>
      <div className="message-content">{content}</div>
    </div>
  );
};

export default Message;
