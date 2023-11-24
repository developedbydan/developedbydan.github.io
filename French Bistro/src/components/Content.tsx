import '../styles/Content.css'
import '../styles/Reset.css'
import { Hero } from './Hero'
import { About } from './About'
import { Testimonial } from './Testimonial'
import { Contact } from './Contact'




export function Content(){
    return (
        <div className="content-holder">
            <Hero/>
            <About/>
            <Testimonial/>
            <Contact/>
        </div>
    )
}