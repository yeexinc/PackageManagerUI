import * as React from "react";

export interface StarRatingProps { 
    rate: number;
}

export class StarRating extends React.Component<StarRatingProps, undefined>
{
    render() { 
        let rate = this.props.rate;
        let stars: JSX.Element[] = [];

        let solidStar = Math.floor(rate);
        let halfStart = 0;
        if (rate - solidStar > 0.5) {
            halfStart = 1;
        }
        let emptyStar = 5 - halfStart - solidStar;

        for (var i = 0; i < solidStar; i++) {
            stars.push(<i className="fa fa-star"></i>);
        }

        if (halfStart == 1) {
            stars.push(<i className="fa fa-star-half-o"></i>);
        }

        for (var i = 0; i < emptyStar; i++) {
            stars.push(<i className="fa fa-star-o"></i>);
        }

        // Display stars on the page
        return (
            <div className="StarRating">{stars}</div>
        )
    }
}
