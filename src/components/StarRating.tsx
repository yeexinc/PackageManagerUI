import * as React from "react";

export interface StarRatingProps {
    rate: number;
}

export interface StarRatingStates {
    hoveredRate: number;
    selectedRate: number;
}

export class StarRating extends React.Component<StarRatingProps, StarRatingStates>
{
    constructor(props: StarRatingProps) {
        super(props);
        this.state = { hoveredRate: -1, selectedRate: -1 };
    }

    onStarMouseOver(event: any) {
        this.setState({ hoveredRate: event.target.value });
    }

    onStarClick(event: any) {
        // If the user has not yet given any ratings yet
        if (this.state.selectedRate == -1) {
            this.setState({ selectedRate: event.target.value })
            this.setState({ hoveredRate: -1 })
        }
    }

    onStarMouseLeave(event: any) {
        this.setState({ hoveredRate: -1 })
    }

    render() {
        // First, the given value to rate
        let rate = this.props.rate;
        let starColorClass = "StarRatingGrey";
        let emptyStarColorClass = "StarRatingGrey";

        if (this.state.selectedRate != -1) {
            // Check if there is a new rating given by the user. If there is, assign it to rate
            rate = this.state.selectedRate;
            starColorClass = "StarRatingWhite";
        }
        else if (this.state.hoveredRate != -1) {
            // If the user has not yet given any ratings, allow the user to hover over the stars
            // to give it a rating. Check if the stars are being hovered and update the UI to show this
            rate = this.state.hoveredRate;
            starColorClass = "StarRatingYellow";
        }

        let stars: JSX.Element[] = [];

        let solidStar = Math.floor(rate);
        let halfStart = 0;
        if (rate - solidStar > 0.5) {
            halfStart = 1;
        }
        let emptyStar = 5 - halfStart - solidStar;
        let index = 1;

        for (var i = 0; i < solidStar; i++) {
            let starClassName = starColorClass + " fa fa-star";
            stars.push(<button className={starClassName} value={index} onMouseOver={this.onStarMouseOver.bind(this)} onClick={this.onStarClick.bind(this)} onMouseLeave={this.onStarMouseLeave.bind(this)}></button>);
            index++;
        }

        if (halfStart == 1) {
            let starClassName = starColorClass + " fa fa-half-o";
            stars.push(<button className={starClassName} value={index} onMouseOver={this.onStarMouseOver.bind(this)} onClick={this.onStarClick.bind(this)} onMouseLeave={this.onStarMouseLeave.bind(this)}></button>);
            index++;
        }

        for (var i = 0; i < emptyStar; i++) {
            let starClassName = emptyStarColorClass + " fa fa-star-o";
            stars.push(<button className={starClassName} value={index} onMouseOver={this.onStarMouseOver.bind(this)} onClick={this.onStarClick.bind(this)} onMouseLeave={this.onStarMouseLeave.bind(this)}></button>);
            index++;
        }

        // Display stars on the page
        return (
            <div className="StarRating">{stars}</div>
        )
    }
}
