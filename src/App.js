import Form from "./components/Form";
import { FormProvider } from "./context/FormContext";
import Header from "./components/header";

function App() {
  return (
    <div className="div-flex">
      <Header />
        <FormProvider>
          <Form />
        </FormProvider>
    </div>
  );
}

export default App;
