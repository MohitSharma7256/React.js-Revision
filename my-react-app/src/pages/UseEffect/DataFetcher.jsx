import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API call on component mount
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // Empty dependency array means this runs only once on mount

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Fetched Data</h1>
            <ol>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ol>
        </div>
    );
};

export default DataFetcher;
