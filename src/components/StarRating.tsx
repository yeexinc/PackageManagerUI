import * as React from "react";

export interface StarRatingProps { rate: number }


export class StarRating extends React.Component<StarRatingProps, undefined>
{

    render() { 
        let rate = this.props.rate;
        let star: JSX.Element[] = [];

        if (rate >= 0) {
            let num = rate;

            if (num % 1 != 0) {
                num = (rate >= 5) ? 5 : Number(rate.toString().split(".")[0]); // to truncate the decimal from double
                for (var i = 0; i < num; i++) {
                    star.push(<img src="/resources/icons/starrating.png" />) // Display stars based on voting - solid stars
                }
                star.push(<img src="/resources/icons/starrating3.png" />) // Display stars for decimal - half star
                for (i = num + 1; i < 5; i++) {
                    star.push(<img src="/resources/icons/starrating2.png" />)// Display stars - grey star
                }
            }

        }
        // Stars less than or equal to zero
        else if (rate <= 0) {
            for (var j = 0; j < 5; j++) {
                star.push(<img src="/resources/icons/starrating2.png" />)
            }
        }

// Display stars on the page
        return (
            <div className="StarRating" >
                <div className="ItemRightPanel">
                    <div className="Stars">{star}</div>
                </div>
            </div>
        )
    }
}
