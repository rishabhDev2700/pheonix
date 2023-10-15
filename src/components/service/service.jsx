import './service.css'
export function Service(props){
    return (<div class="service-card">
        <div class="service-icon">
            {props.children}
        </div>
        <h2 class="service-title">
            {props.title}
        </h2>
        <p class='service-description'>
            {props.description}
        </p>
    </div>)
}