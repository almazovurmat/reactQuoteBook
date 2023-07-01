import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../AxiosApi";
import Loader from "../../components/Loader/Loader";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Categories from "../../components/Categories/Categories";
import {IQuoteApi, IQuoteWithID} from "../../types";

const QuotesByCategory = () => {
    const { category } = useParams();
    const [quotes, setQuotes] = useState<IQuoteWithID[]>([
        {
            id: '',
            author: '',
            category: '',
            text: '',
        }
    ]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const quotesResponse = await axiosApi.get<IQuoteApi>(`/quotes.json?orderBy="category"&equalTo="${category}"`);
            const quotes = Object.keys(quotesResponse.data).map(key => {
                const quote = quotesResponse.data[key];
                quote.id = key;
                return quote;
            });

            setQuotes(quotes);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);
    return (
        <>
            {loading && <Loader/>}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                quotes.map(quoteData => (
                                    <QuoteCard key={quoteData.id} quote={quoteData}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Categories/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuotesByCategory;