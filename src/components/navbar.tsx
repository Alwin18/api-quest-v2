import { ImHome } from "react-icons/im";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBadgeHelp } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const route = useRouter();
  return (
    <>
      <div className="flex justify-between text-white text-xs items-center">
        <button onClick={() => route.push("/")} className="flex gap-1">
          <ImHome /> Home
        </button>
        <div className="flex justify-end gap-2 items-center">
          <div className="bg-[#03346E] px-8 py-1 rounded-[10px]">Upgrade</div>
          <div>
            <LuRefreshCw />
          </div>
          <IoSettingsOutline />
          <LuBadgeHelp />
          <IoMdNotifications />
          <div className="w-[30px] h-[30px] relative rounded-[12px] flex flex-wrap justify-center">
            <img
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
              src="https://lh3.googleusercontent.com/a/ACg8ocLcTC0WmyTpbsE_HgTr_crfm1aWsrRLysDp3Wprd8KF0U-BF8ua=s288-c-no"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
