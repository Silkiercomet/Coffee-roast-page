import CreatePlanButton from "../atoms/CreatePlanBtn"
import CollectionSection from "../organism/CollectionSection"
import HowItWorksSection from "../organism/HowItWorks"
import MainBanner from "../organism/MainBanner"
import WhyUsSection from "../organism/WhyUsSection"

const HomeTemplate = () => {
  return (
    <main>
        <MainBanner type='home-bg'>
            <div>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <CreatePlanButton />
            </div>
        </MainBanner>
        <CollectionSection />
        <WhyUsSection />
        <HowItWorksSection />
        <CreatePlanButton />
    </main>
  )
}

export default HomeTemplate