import * as React from "react";

import { SearchFilter } from "./SearchFilter";

export interface SearchBarProps {
    searchString : string
}

export class SearchBar extends React.Component<SearchBarProps, undefined> {

    render() {
        return (<div className="SearchBarContainer">
            <div className="SearchBar">{this.props.searchString}
                <SearchFilter/>
            </div>
        </div>);
    }
}