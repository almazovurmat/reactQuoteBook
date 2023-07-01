import React from 'react';
import {Link} from "react-router-dom";
import {IQuoteWithID} from "../../types";
import {CATEGORIES} from "../../categories";

interface IProps {
    quote: IQuoteWithID
}
const QuoteCard: React.FC <IProps> = ({quote}) => {
    const getCategoryTitleById = (categoryId:string) => {
        const category = CATEGORIES.find((cat) => cat.id === categoryId);
        return category ? category.title : "";
    };
    return (
        <>
            <div className="card mb-4">
                {/*<a href="#!"><img className="card-img-top"*/}
                {/*                  src={`http://placekitten.com/g/700/350/${quote.category}`} alt={quote.category}/></a>*/}
                <div className="card-body">
                    <h2 className="card-title h4">
                        {getCategoryTitleById(quote.category)}
                    </h2>
                    <p className="card-text">{quote.text}</p>
                    <b className="card-text">{quote.author}</b>
                    <div className="mt-4">
                        <Link className="btn btn-primary" to={`/quotes/${quote.id}/edit`}>EDIT</Link>
                        <a className="btn btn-danger mx-3" href="#!">DELETE</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuoteCard;