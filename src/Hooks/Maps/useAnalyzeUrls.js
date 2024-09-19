import analyze from '../../mocks/analyze.json';
import withoutResults from '../../mocks/no-result.json';
import { useState } from "react";

export function useAnalyzeUrls({ search }) {
    const [responseAnalyzeUrls, setResponseAnalyzeUrl] = useState([]);
    const analyzeUrls = analyze.data

    const mappedAnalyze = analyzeUrls?.map(analyzeUrl => ({
        message:analyzeUrl.message,
        status: analyzeUrl.message
    }))

    const postAnalyzeUrls = () => {
        if (search) {
            fetch('http://127.0.0.1:5000/analyze')
            .then(res => res.json())
            .then(json =>{
                setResponseAnalyzeUrl(json)
            })
        } else {
            setResponseAnalyzeUrl(withoutResults)
        }
    };

    return { analyzeUrls: mappedAnalyze, postAnalyzeUrls };
}
