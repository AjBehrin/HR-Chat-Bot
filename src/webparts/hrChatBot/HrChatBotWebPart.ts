import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import HrChatBot from './components/HrChatBot';
import { IHrChatBotProps } from './components/IHrChatBotProps';

export interface IHrChatBotWebPartProps {
  description: string;
}

export default class HrChatBotWebPart extends BaseClientSideWebPart<IHrChatBotWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IHrChatBotProps> = React.createElement(
      HrChatBot,
      {
        context: this.context,
        domElement: this.domElement
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

}
