import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../AxiosApi";
import Categories from "../../components/Categories/Categories";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Loader from "../../components/Loader/Loader";
import {IQuoteApi, IQuoteWithID} from "../../types";

const MainPage = () => {
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
            const quotesResponse = await axiosApi.get<IQuoteApi>('/quotes.json');
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
    }, []);

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

export default MainPage;