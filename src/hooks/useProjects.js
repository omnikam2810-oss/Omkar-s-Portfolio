import { useEffect, useState } from "react";

const isCompleteProject = (project) =>
  project?.title?.trim() && project?.image?.trim();

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects.json");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setProjects(data.filter(isCompleteProject));
        }
      })
      .catch((error) => {
        console.error(error);
        if (isMounted) {
          setProjects([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return projects;
};

export default useProjects;
