import { cn } from "@/lib/utils";
import { VMTypes } from "../types/proxmox";
import VMImage from "/node/vm.webp";
import LXCImage from "/node/lxc.webp";
import VMTemplateImage from "/node/vm-template.webp";

interface NodeProps {
  vm: VMTypes;
}

export default function Node({
  vm: { vmid, name, cpus, maxdisk, maxmem, registered, status, type, template },
}: NodeProps) {
  const isLXC = type === "lxc";
  const isTemplate = template !== undefined;
  return (
    <div
      className={cn(
        "flex-col flex gap-2 border rounded-2xl w-[350px] h-[350px] p-6 hover:bg-gray-100 cursor-pointer justify-between",
        registered && "border-4 border-red-500",
      )}
    >
      <div className="flex justify-between items-center">
        <h1
          className={cn(
            "text-xl text-primary font-extrabold",
            isLXC && "text-blue-400",
            isTemplate && "text-[#FAC748]",
          )}
        >
          {vmid}
        </h1>
        <h1 className="text-sm text-gray-900 font-semibold">{name}</h1>
      </div>

      <img
        src={isLXC ? LXCImage : isTemplate ? VMTemplateImage : VMImage}
        alt="VM"
        className="self-center w-[200px] h-[200px] object-cover rounded-xl"
      />

      <div className="flex justify-between items-center">
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold text-primary",
              isLXC && "text-blue-400",
              isTemplate && "text-[#FAC748]",
            )}
          >
            CPU :
          </span>{" "}
          {cpus} 코어
        </p>
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold text-primary",
              isLXC && "text-blue-400",
              isTemplate && "text-[#FAC748]",
            )}
          >
            저장 공간 :
          </span>{" "}
          {maxdisk}GB
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold text-primary",
              isLXC && "text-blue-400",
              isTemplate && "text-[#FAC748]",
            )}
          >
            메모리 :
          </span>{" "}
          {maxmem}GB
        </p>
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold text-primary",
              isLXC && "text-blue-400",
              isTemplate && "text-[#FAC748]",
            )}
          >
            상태 :
          </span>{" "}
          <span
            className={cn(
              "text-red-500",
              status === "running" && "text-green-500",
            )}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </p>
      </div>
    </div>
  );
}
