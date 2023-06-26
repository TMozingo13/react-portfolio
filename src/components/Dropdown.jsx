import { Dropdown } from "rsuite";

const ProjectDrop = ({pageName}) => {

    return(
        <Dropdown title="Projects" trigger="hover">
            <Dropdown.Item>All</Dropdown.Item>
            <Dropdown.Item>Fresh</Dropdown.Item>
        </Dropdown>
    );
};


export default ProjectDrop;