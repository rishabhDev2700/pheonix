import './project-tile.css'
export const ProjectTile = (props) => {
    return (<div class="project-tile">
        <img class="project-image" src={props.image} />
        <div class='project-details'>
        <div class="project-title">{props.title}</div>
        <div class="project-description">{props.description}</div>
        </div>
    </div>)
}