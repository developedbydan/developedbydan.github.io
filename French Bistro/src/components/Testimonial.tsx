import '../styles/Testimonial.css'
import '../styles/Reset.css'

export function Testimonial(){
    return(
        <section className="testimonials">
            <h2>LOVE FOR LA LUNE</h2>
            <div className="testimonial-wrapper">
                <div className="quote"></div>
                <h3>TRANSPORTED TO PARIS</h3>
                <p>
                    One bite and I felt like I was back in France. 
                    Chef Ingrid and her team have outdone themselves!
                </p>
                <p className="testimonial-name">- Teddy, Entrepreneur</p>
            </div>
            <div className="testimonial-wrapper">
                <div className="quote"></div>
                <h3>LOVELY BISTRO</h3>
                <p>
                    The ambience was great - and the food even better! 
                    Simple recipes done well, with top-notch ingredients. 
                    Will be back!
                </p>
                <p className="testimonial-name">- Dani, Mother</p>
            </div>
            <div className="testimonial-wrapper">
                <div className="quote"></div>
                <h3>TRANSPORTED TO PARIS</h3>
                <p>
                Eating here made me miss Paris so much. 
                What a treat! I will be bringing my client meetings here.
                </p>
                <p className="testimonial-name">- Carly, Entrepreneur</p>
            </div>
        </section>
    )
}