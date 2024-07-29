"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { GiTeamIdea } from "react-icons/gi";
import { IoAdd } from "react-icons/io5";
import { TbApiApp } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { IPSidebar } from "@/service/teams/type";
import CreateTeam from "@/views/teams/create-team";

function Sidebar(props: IPSidebar) {
  return (
    <div className="flex w-[20%] h-[85vh] text-[#6EACDA] rounded-l-xl border-y border-l border-gray-400">
      <div className="p-4 flex flex-col gap-4 w-[280px]">
        <div className="flex flex-col gap-3 w-full mb-8">
          <div className="flex justify-center w-full">API Quest</div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex w-full gap-2 items-center">
                  <GiTeamIdea color="#6EACDA" />
                  <span className="text-sm text-[#6EACDA]">My Teams</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 w-full">
                {Array.isArray(props.listTeams) &&
                  props.listTeams.map((item) => {
                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          props.handleClickTeamMenu(item.id, item.name)
                        }
                        className={`text-sm opacity-90 px-4 py-1 w-full text-start rounded-lg  ${
                          item.click === true ? `bg-gray-800 text-white` : ` `
                        } `}
                      >
                        {item.name}
                      </button>
                    );
                  })}

                <CreateTeam handleCreateTeam={props.handleCreateTeam} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col justify-between w-full h-full">
          <div className="text-sm">
            <div className="flex justify-start items-center gap-1">
              <TbApiApp />
              <span className="text-sm text-[#6EACDA]">API HUb</span>
            </div>
            <div className="flex justify-start items-center gap-1">
              <MdFavoriteBorder />
              <span className="text-sm text-[#6EACDA]">My Favorites</span>
            </div>
            <div className="flex justify-start items-center gap-1">
              <CiTimer />
              <span className="text-sm text-[#6EACDA]">Recently Visited</span>
            </div>
          </div>

          <div className="flex flex-col text-sm items-center gap-2">
            <button className="border border-[#03346E] rounded-lg w-full px-2 py-2">
              Organization
            </button>
            <button className="rounded-lg bg-[#03346E] w-full px-2 py-3">
              Get Dekstop App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
