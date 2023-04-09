import './globals.css'
import AnimNavi from "@/animation/AnimNavi";
import {AnimContext, AnimWrapper, AnimContextWrapper, useAnimContext, AnimLink} from "@/animation/AnimContext";
import {useRouter} from "next/navigation";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
      <AnimContextWrapper>
          <nav>
              <AnimLink href={"/"}>Home</AnimLink>
              <AnimLink href={"/about"}>About us</AnimLink>
              <AnimLink href={"/contact"}>contact us</AnimLink>
          </nav>
             <AnimWrapper> {children}</AnimWrapper>
      </AnimContextWrapper>
      </body>
    </html>
  )
}

