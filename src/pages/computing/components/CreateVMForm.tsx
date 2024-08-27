import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { VMFormSchema } from "../lib/createVMFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useStorage } from "../hooks/useStorage";
import { useISO } from "../hooks/useISO";
import { cn } from "@/lib/utils";
import { useNetwork } from "../hooks/useNetwork";

type Inputs = z.infer<typeof VMFormSchema>;

const steps = [
  {
    id: "Step 1",
    name: "기본 정보",
    fields: ["name", "vmid"],
  },
  {
    id: "Step 2",
    name: "OS 설정",
    fields: ["osstorage", "osiso"],
  },
  {
    id: "Step 3",
    name: "네트워크 설정",
    fields: ["network"],
  },
  { id: "Step 4", name: "리뷰" },
];

const VMCreateFormKeys: { title: string; key: keyof Inputs }[] = [
  {
    title: "가상 머신 이름",
    key: "name",
  },
  { title: "VM ID", key: "vmid" },
  { title: "OS 스토리지", key: "osstorage" },
  { title: "OS", key: "osiso" },
  { title: "네트워크", key: "network" },
];

interface CreateVMFormProps {
  node: string;
  setOpen: (value: boolean) => void;
}

export default function CreateVMForm({ node, setOpen }: CreateVMFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
    control,
    getValues,
  } = useForm<Inputs>({
    resolver: zodResolver(VMFormSchema),
    defaultValues: {
      node: node,
    },
  });
  const { storageData, storageLoading } = useStorage(node);
  const { isoData, isoLoading } = useISO(node);
  const { networkData, networkLoading } = useNetwork(node);

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    setOpen(false);
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    setCurrentStep((step) => step + 1);
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="flex flex-col justify-between p-4">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-8" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              기본 정보 입력
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              가상 머신에 대한 기본 정보를 입력하세요.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  가상 머신 이름
                </Label>
                <div className="mt-2">
                  <Input type="text" id="name" {...register("name")} />
                  {errors.name?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label
                  htmlFor="vmid"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  VM ID
                </Label>
                <div className="mt-2">
                  <Input
                    type="number"
                    id="vmid"
                    {...register("vmid", {
                      setValueAs: (v) => (v === "" ? undefined : Number(v)),
                    })}
                  />
                  {errors.vmid?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.vmid.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              OS 정보 입력
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              OS 정보를 입력하세요.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <Label
                  htmlFor="osstorage"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  OS 스토리지
                </Label>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {storageLoading ? (
                          <SelectItem value="loading">로딩 중...</SelectItem>
                        ) : (
                          storageData?.diskStorage.map((storage) => (
                            <SelectItem
                              key={storage.storage}
                              value={storage.storage}
                            >
                              {`${storage.storage} - (${storage.avail} / ${storage.total}) GB`}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  )}
                  name="osstorage"
                />
                {errors.osstorage?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.osstorage.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-6">
                <Label
                  htmlFor="osiso"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  OS ISO
                </Label>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {isoLoading ? (
                          <SelectItem value="loading">로딩 중...</SelectItem>
                        ) : (
                          isoData?.map((iso) =>
                            Object.keys(iso).map((key) =>
                              iso[key].map((item) => (
                                <SelectItem key={item.volid} value={item.volid}>
                                  {item.volid}
                                </SelectItem>
                              ))
                            )
                          )
                        )}
                      </SelectContent>
                    </Select>
                  )}
                  name="osiso"
                />
                {errors.osiso?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.osiso.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              네트워크 정보 입력
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              네트워크 정보를 입력하세요.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <Label
                  htmlFor="network"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  랜카드 선택
                </Label>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {networkLoading ? (
                          <SelectItem value="loading">로딩 중...</SelectItem>
                        ) : (
                          networkData?.map((network) => (
                            <SelectItem key={network} value={network}>
                              {network}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  )}
                  name="network"
                />
                {errors.network?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.network.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              리뷰
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              모든 정보를 확인하세요.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-x-6 gap-y-3">
              <div className="p-4 border rounded-lg shadow-sm bg-white cursor-pointer hover:bg-gray-200">
                <h3 className="text-sm font-medium leading-6 text-gray-700">
                  노드
                </h3>
                <div className="mt-2 text-sm font-semibold text-gray-900">
                  <span>{node}</span>
                </div>
              </div>

              {VMCreateFormKeys.map((key) => (
                <div
                  key={key.key}
                  className={cn(
                    "p-4 border rounded-lg shadow-sm bg-white cursor-pointer hover:bg-gray-200",
                    key.title === "OS" && "col-span-2"
                  )}
                >
                  <h3 className="text-sm font-medium leading-6 text-gray-700">
                    {key.title}
                  </h3>
                  <div className="mt-2 text-sm font-semibold text-gray-900">
                    <span>{getValues()[key.key]}</span>
                  </div>
                </div>
              ))}

              <div className="col-span-2 bg-primary rounded-lg shadow-sm relative">
                <div className="absolute h-full w-[18px] -skew-x-[15deg] bg-white left-[165px]"></div>
                <div className="absolute h-full w-[18px] -skew-x-[15deg] bg-white left-[195px]"></div>
                <div className="absolute h-full w-[18px] -skew-x-[15deg] bg-white left-[225px]"></div>
              </div>
            </div>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {currentStep === steps.length - 1 ? (
            <Button type="submit" onClick={handleSubmit(processForm)}>
              생성하기
            </Button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
