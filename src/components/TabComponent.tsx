
import * as React from "react";
import * as ReactDOM from "react-dom";

export class TabComponent extends React.Component<undefined, undefined> {

    tabCaptions: string[] = [];
    tabContents: JSX.Element[] = [];

    insertTab(caption: string, content: JSX.Element) {
        this.tabCaptions.push(caption);
        this.tabContents.push(content);
    }

    render() {
        return (<div>This will be an awesome tab control...</div>);
    }

}
