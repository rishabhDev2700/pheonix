import "./form.css"
import "./../button/button.css"
export function Form(){
    
    return (
        <form class="contact-form">
            <input class="field" type="email" placeholder="Email"/>
            <input class="field" type="text" placeholder="Name"/>
            <textarea class="field" rows="10" placeholder="Message"/>
            <input type="submit" class="submit-button" value="Send the Message"/>
        </form>
    )
}