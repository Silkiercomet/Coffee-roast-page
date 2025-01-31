import HowItWorksSection from "../organism/HowItWorks"
import MainBanner from "../organism/MainBanner"

const ContactUsTemplate = () => {
    const howItWorks = [
        { header: 'Header 1', content: 'Content 1' },
        { header: 'Header 2', content: 'Content 2' },
        { header: 'Header 3', content: 'Content 3' },
      ];
  return (
    <main>
        <MainBanner type='contact-bg'>
            <div>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            </div>
        </MainBanner>
        <HowItWorksSection array={howItWorks} header=""/>

    </main>
  )
}

export default ContactUsTemplate