import React from "react";
import { HeroIcon } from "../icons";
import ActiveButton from "../Components/Button/ActiveButton";
import Content from "../Components/Card/Content";
import Footer from "../Components/Footer/Footer";
import DarkButton from "../Components/Button/DarkButton";

const Index = () => {
  return (
    <div className="px-20 pr-20 flex flex-col justify-center items-center text-white bg-black">
      <label className="text-5xl text-center mt-10">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </label>
      <div className="mt-10">
        <HeroIcon />
      </div>
      <div className="mt-10 px-20 pr-20">
        <p className="font-['Poppins'] ">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
      </div>
      <div className="mt-10">
        <ActiveButton text="Visit Website" />
      </div>
      <div className="mt-20 flex justify-center items-center">
        {/* Column 1 */}
        <div className="flex-1 p-4 h-[15rem]">
          {/* Your content for column 1 */}
          <Content
            text={
              "Explore large, destructible environments where no two games are ever the same."
            }
            image="./card2.jpeg"
          />
        </div>

        {/* Column 2 */}
        <div className="flex-1 p-4 h-[15rem] ">
          {/* Your content for column 2 */}
          <Content
            text={
              "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
            }
            image="./card1.png"
          />
        </div>

        {/* Column 3 */}
        <div className="flex-1 p-4 h-[15rem] ">
          {/* Your content for column 3 */}
          <Content
            text={
              "Discover even more ways to play across thousands of creator-made game genres"
            }
            image="./card3.jpeg"
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-3xl">Our Contribution</p>
      </div>
      <div className="mt-5 font-[poppins] px-80 pr-80">
        Our core offering extends beyond mere profit generation; we emphasize
        the growth and active involvement of our user community. Collaborating
        with us represents an investment, rather than a mere expenditure. Our
        dedication to providing distinctive digital interactions guarantees
        unparalleled benefits for our clientele.
      </div>

      <div className="mt-20 px-80 pr-80">
        <div className="flex text-2xl gap-4">
          {/* Column 1 */}
          <div className="flex-1 flex-col  justify-center text-center ">
            <p>5M</p>
            <p>Daily User Engagements</p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex-col  justify-center text-center">
            <p>10X</p>
            <p>ROAS on all our marketing campaigns</p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex-col  justify-center text-center">
            <p>$500K</p>
            <p>Revenue Surge for an Platform</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center items-center">
          <div>
            <p className="text-4xl">
              Interested in delving deeper into the project?
            </p>
          </div>
          <div className="mt-5">
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at hello@abc.com or give us a call at +91
            480 20802730.
          </div>
          <div className="mt-10 flex gap-6">
            <DarkButton />
            <ActiveButton text="Contact Us" />
          </div>

          <div className="mt-20 mb-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
