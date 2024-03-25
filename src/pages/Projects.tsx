import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"


import projects from "@/content/projects";

const Projects: React.FC = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
            <Card key={index} className=" m-4">
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={project.image} alt={project.name} />
            </CardContent>
            <CardFooter>
                {project.tags.map((tag, index) => (
                    <Badge variant="default" key={index}>{tag.name}</Badge>
                ))}
            </CardFooter>
            </Card>
        ))}
    </div>
    </>
  );
};

export default Projects;
