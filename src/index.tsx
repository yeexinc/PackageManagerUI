import * as React from "react";
import * as ReactDOM from "react-dom";
import {PackageDetail} from "./components/packageDetail";

let dependencies : string[] = ["qux", "quz"];

ReactDOM.render(
    <PackageDetail changeLog="foo" content="bar" dependencies={dependencies}/>,
    document.getElementById("packageDetailPlaceHolder"));