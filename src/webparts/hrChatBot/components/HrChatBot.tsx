import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';
// import styles from './HrChatBot.module.scss';
import { IHrChatBotProps } from './IHrChatBotProps';
import { IHrAgentEmbedProps } from './HrAgentEmbedProps';
import HrAgentEmbed from './HrAgentEmbed';

const HrChatBot: React.FC<IHrChatBotProps> = (props) => {
  let token: any;

  React.useEffect(() => {
    props.context.aadHttpClientFactory
      .getClient('https://graph.microsoft.com')
      .then((client: AadHttpClient): void => {
        client
          .get('https://graph.microsoft.com/v1.0/me', AadHttpClient.configurations.v1)
          .then((response: HttpClientResponse): Promise<any> => {
            token = response.headers.get('Authorization');

            return response.json();
          })
          .then((userObject: any): void => {
            console.log(userObject);
            const element: React.ReactElement<IHrAgentEmbedProps> = React.createElement(
              HrAgentEmbed,
              {
                userName: userObject.displayName,
                authorizationToken: token
              }
            );

            ReactDom.render(element, props.domElement);
          });
      });
  }, [props]);

  return null;
};

export default HrChatBot;