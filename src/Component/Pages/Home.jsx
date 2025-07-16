import Banner from "../Home/Banner";
import BookWorkspace from "../Home/BookWorkspace";
import HowitWorks from "../Home/HowitWorks";
import Questions from "../Home/Questions";
import WhatUsers from "../Home/WhatUsers";
import Whychoose from "../Home/Whychoose";

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
