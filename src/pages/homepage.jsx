import { SolidTyper } from "solid-typer";
import './homepage.css'
import { Service } from "../components/service/service";
import { IoConstruct } from 'solid-icons/io'
import { FaSolidMobileButton, FaSolidBrain } from 'solid-icons/fa'
import { BsGraphUpArrow } from 'solid-icons/bs'
export function Homepage() {
    return (
        <>
            <section class="hero-section">
                <div class="typer-wrapper">
                    <SolidTyper cursor loop text={[
                        "Hey, Welcome to Fuzzydevs",
                        "I am Rishabh",
                        "Would you like to learn coding??",
                        "Try out 1-1 tutoring to level up quickly."
                    ]}
                        backspaceSpeed={30}
                        typingSpeed={100}
                    ></SolidTyper>
                </div>
            </section>
            <hr></hr>
            <section class="services section">
                <h2>Services Offered</h2>
                <div class="services-wrapper">
                    <Service title="Full-Stack Development" description="This is the body of service card"><IoConstruct size={128} /></Service>
                    <Service title="Mobile App Development" description="This is the body of service card">
                        <FaSolidMobileButton size={128} /></Service>
                    <Service title="Consultation" description="Need help? Book a free consultation session with us"><FaSolidBrain size={128} /></Service>
                    <Service title="Technical Training" description="Upskill for better productivity and output"><BsGraphUpArrow size={128} /></Service>
                </div>
            </section>
        </>
    );
}