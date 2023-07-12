import Image from 'next/image'
import Link from 'next/link'
import { Tweet } from 'react-tweet'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"




const misspelledDomains = ["giithub.com","gitbh.com","gitbub.com","gitgub.com","githa.com","githab.com","githb.com","githbu.com","githbub.com","githhb.com","githhub.com","githib.com","githjb.com","githob.com","githu.com","githubb.com","githubv.com","githug.com","githuh.com","githuhb.com","githun.com","githup.com","githuub.com","githyub.com","gitub.com","giub.com","gthub.com","guthib.com","guthub.com"

]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-16 ">
      <div className="flex flex-col items-center max-w-3xl gap-6">
        <h1 className="text-3xl text-center italic">Wanna Hubba Bubba before you go to GitHub, ah?</h1>
        <div className="relative flex flex-col md:flex-row place-items-center gap-x-16 justify-between">
          <Tweet id="1678621920730677248" />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl text-center">How <span className="underline font-semibold">not</span> to visit the Octocat</h2>
          <div className='flex flex-wrap gap-2 select-none'>
            {misspelledDomains.map((domain) => (
              <Badge key={domain} className="">{domain}</Badge>
            ))}
          </div>
          <Alert variant="destructive">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Misspell github.com at your own risk!
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  )
}
