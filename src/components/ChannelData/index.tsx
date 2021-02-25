import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ServerName: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Lucas Kaiut"
            date="31/03/2021"
            content="Hoje é meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="31/03/2021"
          content={
            <>
              <Mention>@Lucas Kaiut</Mention>, Alô! Tudo bem?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
      </InputWrapper>
    </Container>
  );
}

export default ServerName;