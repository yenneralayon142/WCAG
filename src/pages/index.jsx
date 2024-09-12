import Hero from '../components/home/hero';
import Objective from '../components/home/objective';
import Offer from '../components/home/offer';
import ContactForm from '../components/home/contactForm';
export default function Home() {
    return (
        <main>
            <Hero />
            <Objective />
            <Offer />
            <ContactForm />
        </main>
    )
}