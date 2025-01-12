import { Contact } from "./pages/Contact"
import Experience from "./pages/Experience"
import Introduce from "./pages/Introduce"

import { Tech } from "./pages/Tech"


function App() {

  return (
    <div className="mx-auto h-svh  bg-black">
      <Introduce />

      <Experience />
      <Tech />
      <Contact />


    </div>
  )
}

export default App
