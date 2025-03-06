import * as React from 'react';
import styles from './HrChatBot.module.scss';

export default class HrChatBot extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.copilotAgentWebPart}>
        <iframe src="https://your-copilot-agent-url" width="100%" height="600px"></iframe>
      </div>
    );
  }
}
