import GeneralLayout from "./layouts/GeneralLayout";
import GeneralRoutes from "./components/routes/GeneralRoutes";
import "./App.css";

function App() {
  return (
    <>
      <GeneralLayout>
        <GeneralRoutes />
      </GeneralLayout>
    </>
  );
}

export default App;
