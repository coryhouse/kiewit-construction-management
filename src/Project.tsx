import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// Using the type keyword to resolve naming collision.
import { Project as ProjectType } from "./Projects";
import { deleteProject } from "./services/projectService";

type ProjectProps = {
  project: ProjectType;
  projects: ProjectType[];
};

export default function Project({ project, projects }: ProjectProps) {
  return (
    <tr key={project.id}>
      <td>
        <button
          onClick={async () => {
            const currentProjects = [...projects]; // Copy current projects so we can rollback if the delete fails
            try {
              // TODO: UseMutation from react-query to mutate the data and update the cache
              // setProjects(projects.filter((p) => p.id !== project.id));
              await deleteProject(project.id);
              // Option 1: Update local state to reflect the deletion.
              toast.success(project.name + " deleted");
            } catch (error) {
              // setProjects(currentProjects);
              toast.error("Error deleting " + project.name);
            }

            // Option 2: Fetch the updated list of projects from the server.
            // const allProjects = await getProjects();
            // setProjects(allProjects);
          }}
          aria-label={"Delete " + project.name}
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={"/manage-project/" + project.id}>{project.name}</Link>
      </td>
      <td>{project.description}</td>
    </tr>
  );
}
