import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../AxiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Loader from "../../components/Loader/Loader";
import {IQuote} from "../../types";

const QuoteEdit = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [quote, setQuote] = useState<IQuote>({
        author: '',
        category: '',
        text: '',
    });

    const fetchData = useCallback(async (quoteID: string) => {
        try {
            setLoading(true);
            const postResponse = await axiosApi.get<IQuote>(`/quotes/${quoteID}.json`);
            setQuote(postResponse.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [id, fetchData]);

    const onSubmit = async (updatedQuote: IQuote) => {
        try {
            setLoading(true);
            await axiosApi.put(`/quotes/${id}.json`, updatedQuote);
            console.log('Quote updated successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {loading && <Loader />}
            <h4>Edit quote</h4>
            <QuoteForm quote={quote} onSubmit={onSubmit} />
        </>
    );
};

export default QuoteEdit;