import HowItWorksSection from "../organism/HowItWorks"
import MainBanner from "../organism/MainBanner"
import OrderForm from "../organism/OrderForm";
import {howItWorksArray} from "../../ultils/content"
const ContactUsTemplate = () => {

  return (
    <main className="wrapper">
        <MainBanner type='contact-bg'>
            <div>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            </div>
        </MainBanner>
        <div className="contact-info">
            <HowItWorksSection array={howItWorksArray} header=""/>
        </div>
        <OrderForm />
    </main>
  )
}

export default ContactUsTemplate