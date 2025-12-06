import { ThemeProvider as NextTP } from "next-themes"
export default function ThemeProvider({children,...props}){
  return(
    <>
    <NextTP {...props}>
      {children}
    </NextTP>
    
    </>
  )
}