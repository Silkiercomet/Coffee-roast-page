import CreatePlanButton from "../atoms/CreatePlanBtn"
import CollectionSection from "../organism/CollectionSection"
import HowItWorksSection from "../organism/HowItWorks"
import MainBanner from "../organism/MainBanner"
import WhyUsSection from "../organism/WhyUsSection"

const HomeTemplate = () => {
  const howItWorks = [
    { header: 'Header 1', content: 'Content 1' },
    { header: 'Header 2', content: 'Content 2' },
    { header: 'Header 3', content: 'Content 3' },
  ];
  return (
    <main className="wrapper">
        <MainBanner type='home-bg'>
            <div>
                <h1>Great coffee<br /> made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <CreatePlanButton />
            </div>
        </MainBanner>
        <CollectionSection />
        <WhyUsSection />
        <HowItWorksSection array={howItWorks} header="How it works" />
        <CreatePlanButton />
    </main>
  )
}

export default HomeTemplate