import * as React from "react";
import {StarRating} from "./StarRating";

export interface PackageHeaderProps {
    pkg: any
}

export class PackageHeader extends React.Component<PackageHeaderProps, undefined> {
    constructor(props: PackageHeaderProps) {
        super(props);
    }

    render() {
        let pkg = this.props.pkg; 
        let rate = 4.6;
        let starRating = <StarRating rate={rate}/>;

        return (
            <div className="PackageHeaderInfo">
                <div className="PakcageIcon">
                    <img className="PackageIcon" src="/resources/icons/package.png"/>
                </div>
                <div className="PackageName">{pkg.name}</div>
                {starRating}
                <i className="fa fa-download"></i>
                <div className="PackageDownload">{pkg.downloads}</div>
                <div className="PackageDescription">{pkg.description}</div>
            </div>
        );
    }
}