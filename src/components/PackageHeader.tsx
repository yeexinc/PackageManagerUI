import * as React from "react";
import { StarRating } from "./StarRating";

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
        let site = <a href={pkg.site_url}>Website</a>;
        let repo = <a href={pkg.repository_url}>Repo</a>;
        let starRating = <StarRating rate={rate} />;

        return (
            <div className="PackageHeaderInfo">
                <div className="PackageHeaderInfoLeftPanel">
                    <div className="PackageIcon">
                        <img className="PackageIcon" src="./src/resources/icons/package.png" />
                    </div>
                </div>
                <div className="PackageHeaderInfoRightPanel">
                    <div className="PackageName">{pkg.name}</div>
                </div>
                <div className="PackageName">{pkg.name}</div>
                <div className="PackageAuthor">by {pkg.maintainers[0].username}</div>
                {starRating}
                <div className="PackageDownload">
                    <i className="fa fa-download" />
                    {pkg.downloads}
                    ({pkg.votes}<i className="fa fa-users"/>)
                </div>
                <div className="PackageDescription">{pkg.description}</div>
                <div>{site} | {repo}</div>
            </div>
        );
    }
}