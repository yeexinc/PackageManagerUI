import * as React from "react";
import * as ReactDOM from "react-dom";

import { TabComponent } from "./components/TabComponent";
import {PackageDetail} from "./components/packageDetail";

export interface TabControlConfig {
    htmlElementId: string
}

export class TabControl {

    constructor(config: TabControlConfig) {
        let htmlElement = document.getElementById(config.htmlElementId);
        ReactDOM.render(<TabComponent />, htmlElement);
    }

}

let dependencies : string[] = ["qux", "quz"];

ReactDOM.render(
    <PackageDetail changeLog="foo" content="bar" dependencies={dependencies}/>,
    document.getElementById("packageDetailPlaceHolder"));