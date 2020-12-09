import React, { useState } from "react";
import Project from "./project";
import CreateNew from "./createNew";

export const Home = () => {
  const [projectName, setNewProject] = useState("");
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-2">
          <CreateNew
            withTitle={true}
            withContent={false}
            itemType="Project"
            handleCreateNew={(title) => setNewProject(title)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-2">
          <Project projectName={projectName} />
        </div>
      </div>
    </div>
  );
};

export default Home;
