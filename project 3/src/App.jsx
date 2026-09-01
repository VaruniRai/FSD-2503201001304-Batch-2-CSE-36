// Simple Function (not a component)
function add(a, b) {
  return a + b;
}

// React Component
function Welcome() {
  return <h2>Welcome To My first react component</h2>;
}

// Another Component
function Info() {
  return (
    <div>
      <h3>What is a component?</h3>
      <p>A component is a reusable piece of UI in React.</p>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your first react component</h1>

      {/* Using components */}
      <Welcome />
      <Info />

      <h3>How to use component?</h3>
      <p>Use component like HTML tag: &lt;Welcome /&gt;</p>

      <h3>Interview questions</h3>
      <p>Q: What is a React component?</p>
      <p>A: A reusable UI block written as a function or class.</p>
    </div>
  );
}

export default App;