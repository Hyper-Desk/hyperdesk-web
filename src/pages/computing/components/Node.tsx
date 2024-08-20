import { cn } from "@/lib/utils";
import { SystemNode } from "../types/proxmox";
import VMImage from "/node/vm.webp";
import LXCImage from "/node/lxc.webp";

interface NodeProps {
  node: SystemNode;
}

export default function Node({
  node: { vmid, name, cpus, maxdisk, maxmem, registered, status, type },
}: NodeProps) {
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
            type === "lxc" && "text-blue-400",
          )}
        >
          {vmid}
        </h1>
        <h1 className="text-sm text-gray-900">{name}</h1>
      </div>

      <img
        src={type === "lxc" ? LXCImage : VMImage}
        alt="VM"
        className="self-center w-[200px] h-[200px] object-cover rounded-xl"
      />

      <div className="flex justify-between items-center">
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold",
              type === "lxc" ? "text-blue-400" : "text-primary",
            )}
          >
            CPU :
          </span>{" "}
          {cpus} 코어
        </p>
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold",
              type === "lxc" ? "text-blue-400" : "text-primary",
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
              "text-lg font-extrabold",
              type === "lxc" ? "text-blue-400" : "text-primary",
            )}
          >
            메모리 :
          </span>{" "}
          {maxmem}MB
        </p>
        <p className="font-semibold">
          <span
            className={cn(
              "text-lg font-extrabold",
              type === "lxc" ? "text-blue-400" : "text-primary",
            )}
          >
            상태 :
          </span>{" "}
          {status}
        </p>
      </div>
    </div>
  );
}
