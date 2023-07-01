import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../AxiosApi";
import Loader from "../../components/Loader/Loader";

const QuoteDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const fetchData = useCallback(async (postId: string) => {
        try {
            setLoading(true);
            await axiosApi.delete(`/quotes/${postId}.json`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [id, fetchData]);
    return (
        <div>
            {loading && <Loader />}
        </div>
    );
};

export default QuoteDelete;