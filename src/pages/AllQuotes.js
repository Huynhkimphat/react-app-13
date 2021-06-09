import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
    {
        id: "q1",
        author: "Max",
        text: "Learning React Is Fun",
    },
    {
        id: "q2",
        author: "Phat",
        text: "Learning React Is Great",
    },
];
const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
