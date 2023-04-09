"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AnimTools = createContext({
  animClassName: "",
  navigate: (str) => undefined,
});

/**
 * This needs to be somewhere up in the hierachry wrapping your app
 */
export const AnimContextWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const router = useRouter();
  const [animClassName, setAnimClassName] = useState("");

  function navigate(where) {
    setAnimClassName("anim-out");
    setTimeout(() => {
      setAnimClassName("anim-in");
      router.push(where);
    }, 1000);
  }

  const contextObject = {
    animClassName,
    navigate,
  };

  return (
    <AnimTools.Provider value={contextObject}>{children}</AnimTools.Provider>
  );
};

/**
 * This should wrap the portion of your page you wish to animate
 */
export const AnimWrapper = ({ children }: { children: React.ReactNode }) => {
  const context = useAnimContext();

  return <div className={context.animClassName}>{children}</div>;
};

export function useAnimContext() {
  return useContext(AnimTools);
}

/**
 * Use this for links in your navigation <AnimLink href="/contact" />
 */
export const AnimLink = ({
  children,
  href,
  ...rest
}: {
  href: string;
  children: React.ReactElement | string;
}) => {
  const ctx = useAnimContext();
  function hClick(e) {
    e.preventDefault();
    ctx.navigate(href);
  }

  return (
    <a onClick={hClick} href={href} {...rest}>
      {children}
    </a>
  );
};
