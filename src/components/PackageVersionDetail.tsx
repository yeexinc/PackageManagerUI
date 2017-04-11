import * as React from "react";

export interface PackageVersionDetailProps {
    changeLog: string;
    content: any;
    dependencies: string[];
}

export class PackageVersionDetail extends React.Component<PackageVersionDetailProps, undefined> {
    constructor(detail: PackageVersionDetailProps) {
        super(detail);
    }

    render() {
        let deps = this.props.dependencies.map((dep:string) => <li>dep</li>);
        return (
            <div className="Detail">
                <div className="DetailSectionHeader">Description</div>
                <div className="DetailSection">{this.props.content.description}</div>
                <div className="DetailSectionHeader">What's New</div>
                <div className="DetailSection">{this.props.changeLog}</div>
                <div className="DetailSectionHeader">Known Issues</div>
                <div className="DetailSection">No</div>
                <div className="DetailSectionHeader">Dependencies</div>
                <div className="DetailSection"><ul>{deps}</ul></div>
                <div className="DetailSectionHeader">Package Contents</div>
                <div className="DetailSection">{this.props.content.name}</div>
            </div>);
    }
}