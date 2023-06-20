import useFetch from "../hooks/useFetch";

interface PopularProps {}

const Popular: React.FC<PopularProps> = () => {
  const { data } = useFetch("/movie/popular");
  return <div>POPULAR</div>;
};

export default Popular;
