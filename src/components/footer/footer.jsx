import { Socials } from "../socials/socials"
import "./footer.css"


export function Footer(){
    return (
        <footer>
            <Socials/>
            <div class="center credit">built by fuzzydevs.</div>
            <div class="center copyright">Copyright 2023.</div>
        </footer>
    )
}