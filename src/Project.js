const Project = (props) => {
    const { data } = props
    return (
        <div className="idea">
            <h1>Project Idea: { data.idea }</h1>
        </div>
    );
}

export default Project;
