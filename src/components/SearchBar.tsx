import * as React from "react";

export interface SearchBarProps {
    searchString : string
}

export class SearchBar extends React.Component<SearchBarProps, undefined> {
    render() {
        return (<div className="SearchBarContainer">
            <div className="SearchBar">{this.props.searchString}
                <div className="SearchFilter">

                </div>
            </div>
        </div>);
    }
}