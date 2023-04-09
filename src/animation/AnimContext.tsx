"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const contextObject = {
  state: "NORMAL",
};

 const AnimContext = createContext(contextObject);

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
    <AnimContext.Provider value={contextObject}>
      {children}
    </AnimContext.Provider>
  );
};

export const AnimWrapper = ({ children }: { children: React.ReactElement }) => {
  const context = useAnimContext();

  return <div className={context.animClassName}>{children}</div>;
};

export function useAnimContext() {
  return useContext(AnimContext);
}



export const AnimLink = ({ children, href, ...rest }: { href:string, children: React.ReactElement }) => {
  const ctx = useAnimContext();
  function hClick(e) {
    e.preventDefault()
    ctx.navigate(href)
  }

  return <a onClick={hClick} href={href} {...rest}>{children}</a>


}