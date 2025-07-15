import Banner from "./Component/Home/Banner";
import BookWorkspace from "./Component/Home/BookWorkspace";
import HowitWorks from "./Component/Home/HowitWorks";
import Questions from "./Component/Home/Questions";
import WhatUsers from "./Component/Home/WhatUsers";
import Whychoose from "./Component/Home/Whychoose";

const Home = () => {
  return (
    <>
      <Banner/>
      <HowitWorks worktitle={"How It Works"} workparagraph={"Booking a coworking space has never been easier."}/>
      <Whychoose worktitle={"Why Choose CoWorkMate?"} workparagraph={"Simplifying workspace booking for individuals, teams, and businesses."}/>
      <WhatUsers/>
      <Questions/>
      <BookWorkspace/>
    </>
  )
}

export default Home
