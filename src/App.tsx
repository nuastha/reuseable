import BGHeader from "./component/BGHeading"
import Footer from "./component/Footer"
import Header from "./component/Header"
import ToDo from "./component/ToDo"
import Sidebar from "./component/Sidebar"


function App() {

  // Render
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen flex-col">
        <BGHeader />
        <main className="relative bg-white h-[520px] w-[972px] rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">

          <Header />

          <ToDo />

          <Sidebar />

        </main>

        <Footer />

      </div>
    </>
  )
}

export default App
