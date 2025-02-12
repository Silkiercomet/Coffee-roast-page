import Headquarters from "../organism/Headquaters"
import MainBanner from "../organism/MainBanner"
import SecondaryBanner from "../organism/SecondaryBanner"
import {aboutBanner} from "../../ultils/content"
const AboutTemplate = () => {
  return (
    <main className="wrapper">
        <MainBanner type='about-bg'>
            <div>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            </div>
        </MainBanner>
        {aboutBanner.map((element, index) => 
          <SecondaryBanner key={index} title={element.title} content={element.content} img={element.image} inverse={element.reverse} />
        )}
        <Headquarters />
    </main>
  )
}

export default AboutTemplate