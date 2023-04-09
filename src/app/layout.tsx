import './globals.css'
import { AnimWrapper, AnimContextWrapper, AnimLink} from "@/animation/AnimTools";

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

