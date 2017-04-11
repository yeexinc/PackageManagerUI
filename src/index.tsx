import * as React from "react";
import * as ReactDOM from "react-dom";

import { TabComponent } from "./components/TabComponent";
import { PackageVersionDetail } from "./components/PackageVersionDetail";

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

export interface DetailedViewConfig {
    htmlElementId: string
}

export class DetailedView {

    constructor(config: DetailedViewConfig) {
        let htmlElement = document.getElementById(config.htmlElementId);
        ReactDOM.render(<DetailedViewContainer packageId="id goes here" />, htmlElement);
    }

}

export function DoSomeFancyStuff() {

    fetch("/package/583d8ad8fdef23aa6e000037")
        .then(function (response: Response) {
            return response.text();
        }).then(function (jsonString) {

            let completeJson = JSON.parse(jsonString);
            let dependencies: string[] = ["qux", "quz"];

            ReactDOM.render(
                <PackageVersionDetail changeLog="foo" content={completeJson.content} dependencies={dependencies} />,
                document.getElementById("packageDetailPlaceHolder")
            );
        });
}

