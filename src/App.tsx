import "./index.css";
import Container from "./components/Container";
import createPost from "./assets/images/illustration-create-post.webp";
import fiveStars from "./assets/images/illustration-five-stars.webp";
import schedulePosts from "./assets/images/illustration-schedule-posts.webp";
import multiplePlatforms from "./assets/images/illustration-multiple-platforms.webp";
import consistentSchedule from "./assets/images/illustration-consistent-schedule.webp";
import growFollowers from "./assets/images/illustration-grow-followers.webp";
import aiContent from "./assets/images/illustration-ai-content.webp";
import audienceGrowth from "./assets/images/illustration-audience-growth.webp";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <Container>
        <div className="grid grid-cols-4 grid-rows-6 gap-6 p-4">
          <Card
            title={
              <>
                <h2 className="italic font-bold text-black text-2xl">
                  Create and schedule content{" "}
                  <span style={{ color: "#7651DB" }}>quicker.</span>
                </h2>
              </>
            }
            bgColor="#EDE4D8"
            textColor="black"
            image={createPost}
            imageSize={175}
            imgAlt="Create Post"
            rowSpan="row-span-3"
          />
          <Card
            title={
              <>
                <h2 className="font-bold text-white text-2xl">
                  Social Media <span style={{ color: "#FFCD69" }}>10x</span>{" "}
                  Fast with AI
                </h2>
              </>
            }
            bgColor="#7652DA"
            textColor="white"
            image={fiveStars}
            imageSize={250}
            imgAlt="Five Stars"
            description="Over 4,000 5-star reviews"
            colSpan="col-span-2"
            rowSpan="row-span-2"
          />
          <Card
            title="Schedule to social media."
            bgColor="#D4C8F7"
            textColor="black"
            image={schedulePosts}
            imageSize={200}
            imgAlt="Schedule Posts"
            description="Optimize post timings to publish content at the perfect time for your audience."
            rowSpan="row-span-4"
          />
          <Card
            title="Manage multiple accounts and platforms."
            bgColor="#FFF"
            textColor="black"
            image={multiplePlatforms}
            imageSize={250}
            imgAlt="Multiple Platforms"
            rowSpan="row-span-2"
          />
          <Card
            title="Maintain a consistent posting schedule"
            bgColor="#FFCD69"
            textColor="black"
            imageSize={150}
            image={consistentSchedule}
            imgAlt="Consistent Schedule"
            rowSpan="row-span-2"
          />
          <Card
            title="Write your content using AI."
            bgColor="#FFCD69"
            textColor="black"
            image={aiContent}
            imageSize={200}
            imgAlt="AI Content"
            rowSpan="row-span-3"
            colSpan="col-span-1"
          />
          <Card
            title={
              <>
                <span className="font-bold text-4xl text-black">{">56%"}</span>
                <h2 className="font-bold text-black text-2xl">
                  faster audience growth
                </h2>
              </>
            }
            bgColor="#FFF"
            textColor="black"
            image={audienceGrowth}
            imageSize={200}
            imgAlt="Audience Growth"
            colSpan="col-span-1"
            rowSpan="row-span-2"
          />
          <Card
            title="Grow followers with non-stop content."
            bgColor="#7652DA"
            textColor="white"
            image={growFollowers}
            imageSize={200}
            imgAlt="Grow Followers"
            colSpan="col-span-2"
            rowSpan="row-span-2"
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
