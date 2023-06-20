import useFetch from "../hooks/useFetch";

interface TrendingNowProps {}

const TrendingNow: React.FC<TrendingNowProps> = () => {
  const { data } = useFetch("/trending/movie/day");
  return <div>TrendingNow!</div>;
};

export default TrendingNow;
