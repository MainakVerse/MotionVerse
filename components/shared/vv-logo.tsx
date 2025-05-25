"use client";

import React from "react";

import {
  
  CodeIcon,
  
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  HoverCard,

} from "@/components/ui/hover-card";
import Link from "next/link";

export default function VVLogo() {
  return (
    <HoverCard>
      
        <Link href="/">
          <Button variant="link" className="text-lg">
            <CodeIcon className="h-6 w-6 mr-2" />
            MotionVerse
          </Button>
        </Link>
      
     
    </HoverCard>
  );
}
