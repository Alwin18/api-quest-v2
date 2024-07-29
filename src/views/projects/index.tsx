import { IPProjects } from "@/service/projects/type";
import { Badge } from "@/components/ui/badge";
import React from "react";

function VProjects(props: IPProjects) {
  return (
    <section className=" p-8 w-full border border-gray-400 rounded-r-xl">
      <div className="flex items-center gap-2 text-white">
        <h1>{props.team_name}</h1>
        <Badge className="text-center bg-yellow-700">Team Owner</Badge>
      </div>
      <div className="bg-gray-600 w-[50%] rounded-xl text-white text-xs mt-6 flex">
        {props.tabMenus.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => props?.handleClickTabs(item.id)}
              className={`w-[20%] text-center rounded-[8px] p-1 py-2

                ${item.click === true ? `bg-gray-800` : ` `} `}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {Array.isArray(props.projects) &&
          props.projects.map((item) => {
            return (
              <div
                onClick={() => props.handleClickProjects(item.id)}
                className="bg-slate-800 p-4 rounded-lg flex flex-col gap-4 items-start justify-start w-[250px] max-w-[250px] cursor-pointer"
              >
                <img
                  src={
                    "https://assets.apidog.com/app/project-icon/builtin/" +
                    item.icon
                  }
                  width={38}
                  className="rounded-lg"
                  alt="icon"
                />
                <p className="text-white text-[13px] font-bold">
                  {item.project_name}
                </p>
                <p className="ml-4 text-sm font-medium">{item.project_type}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default VProjects;
