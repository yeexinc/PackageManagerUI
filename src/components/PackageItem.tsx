import * as React from 'react';
import {InstallButtons} from './InstallButtons';
import {StarRating} from './StarRating';

export interface PackageItemProps {
    index: number, data: any, selected: boolean, setSelection: SetSelectionFunc
    }
export interface PackageItemState { expanded: boolean }

export interface SetSelectionFunc {
    (index: number): void
}

export class PackageItem extends React.Component<PackageItemProps, PackageItemState> {

    constructor(props: PackageItemProps) {
        super(props); // Must call the base class
        this.state = { expanded: false };
        this.toggleExpandState = this.toggleExpandState.bind(this);
    }

    toggleExpandState() {
        this.setState({ expanded: !this.state.expanded }); // Toggle boolean value
    }

    onItemContainerClicked() {
        this.props.setSelection(this.props.index);
        // console.log("Clicked: " + this.props.index);
    }

    render() {
        let pkg = this.props.data;
        let description: string = pkg.description;
        let selectedStyle = "ItemContainer ";
        selectedStyle += this.props.selected ? "ItemContainerSelected" : "ItemContainerBg";

        /* //description
        if (description.length > 140) {
            toggle = "[collapse]";

            if (!this.state.expanded) {
                description = description.substr(0, 140) + "..."; 
                toggle = "[expand]";
            }
        }*/

        return (
            <div className={selectedStyle} onClick={this.onItemContainerClicked.bind(this)}>
                <div className="ItemLeftPanel">
                    <img src="/dist/resources/icons/package.png" />
                </div>
                <div className="ItemRightPanel">
                    <div className="PackageCaption">
                        <span className="ItemPackageName">{pkg.name}</span>
                        <span className="ItemPackageVersion">{pkg.versions[0].version}</span><br />
                        <span className="ItemPackageAuthor">by {pkg.maintainers[0].username}</span>
                    </div>
                    <StarRating rate={4}/>
                    <InstallButtons packageLink={undefined} packageName={pkg.name} packageVersion={pkg.versions[0].version}/>
                </div>
            </div>
        );
    }
}