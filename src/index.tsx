import * as React from "react";
import * as ReactDOM from "react-dom";

import { TabComponent } from "./components/TabComponent";
import { PackageDetail } from "./components/packageDetail";

export interface TabControlConfig {
    htmlElementId: string
}

export class TabControl {

    constructor(config: TabControlConfig) {
        let htmlElement = document.getElementById(config.htmlElementId);
        ReactDOM.render(<TabComponent />, htmlElement);
    }

}

fetch("/package/583d8ad8fdef23aa6e000037")
    .then(function (response: Response) {
        return response.text();
    }).then(function (jsonString) {

        let completeJson = JSON.parse(jsonString);
        let dependencies: string[] = ["qux", "quz"];

        ReactDOM.render(
            <PackageDetail changeLog="foo" content={completeJson.content} dependencies={dependencies} />,
            document.getElementById("packageDetailPlaceHolder")
        );
    });
