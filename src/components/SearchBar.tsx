import * as React from "react";

type SortKey = "PackageName" | "DownloadCount" | "Rating" | "RecentlyUpdated" | "Author";
type SortOrder = "Ascending" | "Descending";

export interface SortButtonProps {
}

export interface SortButtonState {
    expanded: boolean;
    sortKey: SortKey;
    sortOrder: SortOrder;
}

export class SearchBar extends React.Component<SortButtonProps, SortButtonState> {

    constructor(props: SortButtonProps) {
        super(props);
        this.state = {
            expanded: false,
            sortKey: "PackageName",
            sortOrder: "Ascending"
        };
    }

    onSortButtonClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    onSortKeyClick(event: any) {
        this.setState({
            sortKey: event.target.id
        })
    }

    onSortOrderClick(event: any) {
        this.setState({
            sortOrder: event.target.id
        })
    }

    render() {
        let options = null;
        let optionText = "OptionText";
        let optionTextHighlight = "OptionTextHighlight"
        if (this.state.expanded) {
            options = (
                <div className="Options">
                    <div className="SortBy">Sort by: </div>
                    <ul className="SortKeys">
                        <li id={"PackageName"} className={this.state.sortKey === "PackageName" ? optionTextHighlight : optionText}
                            onClick={this.onSortKeyClick.bind(this)}>Package name</li>
                        <li id={"DownloadCount"} className={this.state.sortKey === "DownloadCount" ? optionTextHighlight : optionText}
                            onClick={this.onSortKeyClick.bind(this)}>Download count</li>
                        <li id={"Rating"} className={this.state.sortKey === "Rating" ? optionTextHighlight : optionText}
                            onClick={this.onSortKeyClick.bind(this)}>Rating</li>
                        <li id={"RecentlyUpdated"} className={this.state.sortKey === "RecentlyUpdated" ? optionTextHighlight : optionText}
                            onClick={this.onSortKeyClick.bind(this)}>Recently Updated</li>
                        <li id={"Author"} className={this.state.sortKey === "Author" ? optionTextHighlight : optionText}
                            onClick={this.onSortKeyClick.bind(this)}>Author</li>
                    </ul>
                    <div className="OrderBy">Order: </div>
                    <ul className="Orders">
                        <li id={"Ascending"} className={this.state.sortOrder === "Ascending" ? optionTextHighlight : optionText}
                            onClick={this.onSortOrderClick.bind(this)}>Ascending</li>
                        <li id={"Descending"} className={this.state.sortOrder === "Descending" ? optionTextHighlight : optionText}
                            onClick={this.onSortOrderClick.bind(this)}>Descending</li>
                    </ul>
                </div>
            );
        }

        return (
            <div className="SearchBarContainer">
                <input className="SearchInput" type="search" />
                <div className="SearchOptionsContainer">
                    <img className={this.state.expanded? "IconHighlight" : "Icon"} src="./dist/resources/icons/sort-button.png" onClick={this.onSortButtonClick.bind(this)} />
                    {options}
                </div>
            </div>
        );
    }
}
