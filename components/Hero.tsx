"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Cursor from "./Cursor";
import Link from "next/link";

const Hero = () => {
  const count = useMotionValue(0);
  const baseText = "Making Registration Interactive and Easy" as string;

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 2.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center w-full lg:mx-0 mx-auto lg:py-16 py-8 px-8 lg:px-[166px]"
      id="hero"
    >
      <span className="lg:text-[120px] text-[56px] max-w-[1200px] text-center font-medium leading-tight text-primary">
        <motion.span>{displayText}</motion.span>
        <Cursor />
      </span>

      <h3 className="text-primary font-normal lg:text-[32px] text-[16px] text-center leading-normal mt-6">
        Focus on enjoying your smooth events registration.
      </h3>
      <div className="lg:mt-[80px] mt-8">
        <Link href="/#form">
          <Button className="text-white text-center lg:text-[32px] text-[24px] lg:py-12 lg:px-16 py-8 px-12 font-medium bg-[#405DF6]">
            Register Now!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
