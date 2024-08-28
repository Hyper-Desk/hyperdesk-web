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
        "flex h-[350px] w-[350px] cursor-pointer flex-col justify-between gap-2 rounded-2xl border p-6 hover:bg-gray-100",
        registered && "border-4 border-red-500",
      )}
    >
      <div className="flex items-center justify-between">
        <h1
          className={cn(
            "text-xl font-extrabold text-primary",
            isLXC && "text-blue-400",
            isTemplate && "text-[#FAC748]",
          )}
        >
          {vmid}
        </h1>
        <h1 className="text-sm font-semibold text-gray-900">{name}</h1>
      </div>

      <img
        src={isLXC ? LXCImage : isTemplate ? VMTemplateImage : VMImage}
        alt="VM"
        className="h-[200px] w-[200px] self-center rounded-xl object-cover"
      />

      <div className="flex items-center justify-between">
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

      <div className="flex items-center justify-between">
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
