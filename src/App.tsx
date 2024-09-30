import "./index.css";
import Container from "./components/Container";
import createPost from "./assets/images/illustration-create-post.webp";
import fiveStars from "./assets/images/illustration-five-stars.webp";
import schedulePosts from "./assets/images/illustration-schedule-posts.webp";
import multiplePlatforms from "./assets/images/illustration-multiple-platforms.webp";
import consistentSchedule from "./assets/images/illustration-consistent-schedule.webp";
import growFollowers from "./assets/images/illustration-grow-followers.webp";
import aiContent from "./assets/images/illustration-ai-content.webp";

function App() {
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <Container>
        <div
          className="grid grid-cols-4 grid-rows-6 gap-4 p-4"
          style={{ maxHeight: "80vh" }}
        >
          <div
            className="row-span-3 flex flex-col justify-evenly items-center px-6"
            style={{ backgroundColor: "#EDE4D8" }}
          >
            <div>
              <h1 className="font-bold text-black text-2xl">
                Create and schedule content{" "}
                <span style={{ color: "#7651DB" }}>quicker.</span>
              </h1>
            </div>
            <div>
              <img src={createPost} alt="Create Post" width={175} />
            </div>
          </div>
          <div
            className="col-span-2 row-span-2"
            style={{ backgroundColor: "#7652DA" }}
          >
            <h1>Social Media 10x Fast with AI</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src={fiveStars} alt="Five Stars" />
            </div>
            <div>Over 4,000 5-star reviews</div>
          </div>
          <div
            className="row-span-4"
            style={{
              backgroundColor: "#D4C8F7",
            }}
          >
            <h4>Schedule to social media.</h4>
            <img src={schedulePosts} alt="Schedule Posts" width={200} />
            <div>
              <p>
                Optimize post timings to publish content at the perfect time for
                your audience.
              </p>
            </div>
          </div>
          <div className="row-span-2" style={{ backgroundColor: "#FFF" }}>
            <img src={multiplePlatforms} alt="Multiple Platforms" width={250} />
            <h2>Manage multiple accounts and platforms.</h2>
          </div>
          <div className="row-span-2" style={{ backgroundColor: "#FFCD69" }}>
            <h2>Maintain a consistent posting schedule</h2>
            <img
              src={consistentSchedule}
              alt="Consistent Schedule"
              width={150}
            />
          </div>
          <div
            className="row-span-3 col-span-1"
            style={{ backgroundColor: "#FFCD69" }}
          >
            <h2>Write your content using AI.</h2>
            <img src={aiContent} alt="AI Content" width={200} />
          </div>
          <div
            className="col-span-1 row-span-2"
            style={{ backgroundColor: "#FFF" }}
          >
            <h1>{">56%"}</h1>
            <p>faster audience growth</p>
            <div>[three image icons in a row]</div>
          </div>
          <div
            className="col-span-2 row-span-2"
            style={{ backgroundColor: "#7652DA" }}
          >
            <div className="flex">
              <img src={growFollowers} alt="Grow Followers" width={200} />
              <div>
                <h2>Grow followers with non-stop content.</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
