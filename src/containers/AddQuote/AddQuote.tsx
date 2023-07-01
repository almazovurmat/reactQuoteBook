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
            <div className="w-75 mx-auto mb-4">
                <h4>Добавить новую цитату</h4>
            </div>
            <QuoteForm onSubmit={createNewQuote} />
        </>
    );
};

export default AddQuote;