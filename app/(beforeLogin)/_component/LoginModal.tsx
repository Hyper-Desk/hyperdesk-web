"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { faker } from "@faker-js/faker";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger className="p-2 bg-white rounded-sm text-primary text-lg font-medium hover:bg-primary-light hover:shadow-sm">
        로그인
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>
            <div className="p-10 flex gap-8">
              <Image
                className="rounded-2xl shadow-lg"
                src={faker.image.urlLoremFlickr({ width: 300, height: 300 })}
                width="300"
                height="300"
                alt="hero IMG"
              />
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" className="w-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <Input id="password" type="password" className="w-full" />
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
