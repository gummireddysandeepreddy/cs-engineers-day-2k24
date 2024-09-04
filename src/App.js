import Form from "./components/Form"
import { FormProvider } from './context/FormContext'
import Header from "./components/header"

function App() {

  return (
    <>
      <Header />
      <FormProvider>
        <Form />
      </FormProvider>
    </>
  )

}

export default App;
