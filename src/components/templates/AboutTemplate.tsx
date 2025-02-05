import Headquarters from "../organism/Headquaters"
import MainBanner from "../organism/MainBanner"
import SecondaryBanner from "../organism/SecondaryBanner"

const AboutTemplate = () => {
  return (
    <main className="wrapper">
        <MainBanner type='about-bg'>
            <div>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            </div>
        </MainBanner>
        <SecondaryBanner title="title" content="content" img="image" inverse={false} />
        <SecondaryBanner title="title" content="content" img="image" inverse={true} />
        <Headquarters />
    </main>
  )
}

export default AboutTemplate