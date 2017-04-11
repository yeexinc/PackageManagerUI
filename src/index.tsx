import * as React from "react";
import * as ReactDOM from "react-dom";

import { TabComponent } from "./components/TabComponent";

import{DetailedViewContainer} from "./components/DetailedViewContainer"

export interface TabControlConfig {
    htmlElementId: string
}

export class TabControl {

    constructor(config: TabControlConfig) {
        let htmlElement = document.getElementById(config.htmlElementId);
        ReactDOM.render(<TabComponent />, htmlElement);
    }

    tabCaptions: string[] = [];
    tabContents: JSX.Element[] = [];

    insertTab(caption: string, content: JSX.Element) {
        this.tabCaptions.push(caption);
        this.tabContents.push(content);
    }
}

fetch("/package/583d8ad8fdef23aa6e000037")
    .then(function (response: Response) {
        return response.text();
    }).then(function (jsonString) {
        let completeJson = JSON.parse(jsonString);
    
        let dependencies : string[] = ["qux", "quz"];
        let pkg = completeJson.content;

        ReactDOM.render(
            <DetailedViewContainer pkg={pkg}/>,
            document.getElementById("rightContentPlaceholder")
        );
});
