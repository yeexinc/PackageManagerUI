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
        if (pkg.site_url === "") site = undefined;
        
        let repo = <a href={pkg.repository_url}>Repository</a>;
        if (pkg.repository_url === "") {
            repo = undefined;
        }
        let separator = (pkg.site_url === "" || pkg.repository_url === "") ? "" : " | ";
        let starRating = <StarRating rate={rate} />;

        return (
            <div className="PackageHeaderInfo">
                <div className="PackageHeaderInfoLeftPanel">
                    <div className="PackageIcon">
                        <img className="PackageIcon" src="./dist/resources/icons/package.png" />
                    </div>
                </div>
                <div className="PackageHeaderInfoRightPanel">
                    <div className="PackageName">{pkg.name}</div>
                    <div className="PackageAuthor">by {pkg.maintainers[0].username}</div>
                    <div className="PackageCrumbles">
                        <div className="AlignLeft">
                            {starRating}&nbsp;
                            ({pkg.votes}&nbsp;<i className="fa fa-users"/>)
                        </div>
                        <div className="AlignLeft">
                            <i className="fa fa-download" />&nbsp;
                            {pkg.downloads}&nbsp;
                        </div>
                        <div className="AlignRight">{site}{separator}{repo}</div>
                    </div>
                    <div className="PackageDescription">{pkg.description}</div>
                </div>
                
            </div>
        );
    }
}
