import useFetch from "../hooks/useFetch";

interface TopRatedProps {}

const TopRated: React.FC<TopRatedProps> = () => {
  const { data } = useFetch("/movie/top_rated");
  return <div>topRated!</div>;
};

export default TopRated;
