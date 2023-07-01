import React, {useState} from 'react';
import axiosApi from "../../AxiosApi";
import {IQuote} from "../../types";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Loader from "../../components/Loader/Loader";

const AddQuote = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const createNewQuote = async (newQuote: IQuote) => {
        try {
            setLoading(true);
            await axiosApi.post('/quotes.json', newQuote);
            console.log('Quote created successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <h4>Add new quote</h4>
            <QuoteForm onSubmit={createNewQuote} />
        </>
    );
};

export default AddQuote;