import "./index.css";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      {/* grid elements */}
      <div className="grid grid-cols-3">
        <div>
          <h3>Create and schedule content quicker.</h3>
          <div style={{ backgroundColor: "#EDE4D8" }}>
            <button>Create Post *</button>
            <div>[cursor image]</div>
          </div>
        </div>
        <div style={{ backgroundColor: "#7652DA" }}>
          <h2>Social Media 10x Fast with AI</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>
          <div>Over 4,000 5-star reviews</div>
        </div>
        <div style={{ backgroundColor: "#D4C8F7" }}>
          <h4>Schedule to social media.</h4>
          <div>[Graph Image]</div>
          <div>
            <p>
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#FFCD69" }}>
        <h2>Write your content using AI.</h2>
        <div>
          <div>Give me a 5 tips to growth my follower on Insta!</div>
          <div>
            Certainly! Here are five tips to help you grow your instagram!
          </div>
        </div>
      </div>
      <div>
        <h2>Manage multiple accounts and platforms.</h2>
      </div>
      <div style={{ backgroundColor: "#FFCD69" }}>
        <h2>Maintain a consistent posting schedule</h2>
        <div>[image with august 2024, week 1]</div>
      </div>
      <div>
        <h1>{">56%"}</h1>
        <p>faster audience growth</p>
        <div>[three image icons in a row]</div>
      </div>
      <div style={{ backgroundColor: "#7652DA" }}>
        <div>[Image with graph and numbers etc]</div>
        <div>
          <h2>Grow followers with non-stop content.</h2>
        </div>
      </div>
    </Container>
  );
}

export default App;
