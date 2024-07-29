"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { UseTeams } from "@/service/teams/teams";
import React from "react";
import VProjects from "../projects";
import Spinner from "@/components/spinner";
import CreateTeam from "./create-team";

const VTeams = () => {
  const { data, method } = UseTeams();

  if (data.teamLoading)
    return (
      <>
        <div className="flex w-full h-screen justify-center items-center my-auto">
          <Spinner />
        </div>
      </>
    );
  return (
    <>
      <div className="flex gap-1 flex-col bg-[#021526] w-full p-4">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="h-full w-full flex my-4">
          <Sidebar
            listTeams={data.teamMenu}
            teamLoading={data.teamLoading}
            handleClickTeamMenu={method.handleClickTeamMenu}
            handleClickAddTeam={method.handleClickAddTeam}
            handleCreateTeam={method.handleCreateTeam}
          />
          <VProjects
            handleClickTabs={method.handleClickTabs}
            tabMenus={data.tabs}
            projects={data.listProjects}
            team_name={data.teamName}
            handleClickProjects={method.handleClickProjects}
          />
        </div>
      </div>
    </>
  );
};

export default VTeams;
