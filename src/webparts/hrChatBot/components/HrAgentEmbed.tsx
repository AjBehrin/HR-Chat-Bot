import * as React from 'react';
import { IHrAgentEmbedProps } from './HrAgentEmbedProps';

class HrAgentEmbed extends React.Component<IHrAgentEmbedProps, {}> {

    render() {
        const iFrameUrl = `https://copilotstudio.microsoft.com/environments/c3e5a6c6-194c-e078-aadd-9b37cfc7ef13/bots/cr918_agent/webchat?__version__=2?token=${encodeURIComponent(this.props.authorizationToken)}?user=${encodeURIComponent(this.props.userName)}`;

        return (
            <div>
                <h2>{this.props.userName}</h2>
                <iframe src={iFrameUrl} frameBorder="0" style={{ width: '100%', height: '100%' }}></iframe>
            </div>
        );
    }
}

export default HrAgentEmbed;
