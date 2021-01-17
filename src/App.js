import Articles from "./components/Articles";
import Users from "./components/Users"; 

function App() {
  return (
    <div className="container">
      <h4 className="text-center">React Skeleton</h4>
      <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Articles />
        </div>
        <div className="col-sm-4">
          <Users />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
