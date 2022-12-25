import Image from "next/image";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";
import metaData from "../data/metaData";

const Home = () => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metaData.title}
          </span>
        </div>
        <RecentPosts />
      </div>
    </Container>
  );
};
export default Home;
