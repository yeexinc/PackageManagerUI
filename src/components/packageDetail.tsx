import * as React from "react";

export interface PackageDetailProps {
    changeLog: string;
    content: any;
    dependencies: string[];
}

export class PackageDetail extends React.Component<PackageDetailProps, undefined> {
    constructor(detail: PackageDetailProps) {
        super(detail);
        console.log(this.props.content);
    }

    render() {
        return (
            <div className="Detail">
                <div className="DetailSectionHeader">What's New:</div>
                <div className="DetailSection">{this.props.content.versions[0].change_log}</div>
                <div className="DetailSectionHeader">KnownIssue</div>
                <div className="DetailSection"></div>
                <div className="DetailSectionHeader">Dependencies</div>
                <div className="DetailSection"></div>
                <div className="DetailSectionHeader">Content of Package</div>
                <div className="DetailSection"></div>
            </div>);
    }
}