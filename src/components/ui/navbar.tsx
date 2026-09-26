"use client";

import { ChevronDown, LogOut, Moon, Sun, SunMoon, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between m-2 py-2 px-4 bg-white">
      <Link href={"/"} className="">
        <Image
          alt="sikola logo"
          src={"/logo.jpg"}
          width={1280}
          height={720}
          priority
          className="md:w-1/2 w-1/3 h-auto object-cover"
        />
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 py-1 px-1.5 rounded-full bg-neutral-100">
          <div className="avatar">
            <Image
              width={480}
              height={480}
              src={"/avatar_fallback.webp"}
              className="w-10 object-cover rounded-full"
              alt="avatar_icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-blue-500 text-sm">Prabowo Subianto</p>
            <p className="text-xs">Semester Ganjil 2026/2027</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button>
                  <ChevronDown size={5} />
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/profile"} className="flex gap-2 items-center">
                    <User2 /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon /> Tema
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Sun /> Terang
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Moon /> Gelap
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className={"text-destructive"}>
                <LogOut /> Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
