import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { ShowDetails } from "./buttons"
import { Visitor } from "@/app/[lang]/expo/types"
import { PokeButton } from "./poke-button"
import { auth } from "@/auth"
import { getPokedUsers } from "./actions"


async function getVisitors() {
  const res = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/presenters')
  const data = await res.json()
  return data.data as Visitor[]
}

export default async function Visitors() {
  const visitors = await getVisitors()
  const session = await auth()
  
  // Get list of already poked users if user is authenticated
  const pokedUsers = session?.user?.id 
    ? await getPokedUsers(session.user.id)
    : []
  
  const pokedIds = new Set(pokedUsers.map(p => p.poked_id))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {visitors.map((visitor) => (
        <Card key={visitor.id}>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {visitor.fname[0]}{visitor.lname[0]}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <p className="font-medium">{visitor.fname} {visitor.lname}</p>
                <p className="text-sm text-muted-foreground">{visitor.domain}</p>
              </div>

              {session?.user && (
                pokedIds.has(visitor.id) ? (
                  <Button variant="ghost" size="sm" className="gap-2" disabled>
                    <Bell className="h-4 w-4" />
                    Poked
                  </Button>
                ) : (
                  <PokeButton visitorId={visitor.id} />
                )
              )}
            </div>

            <div className="flex justify-end">
              <ShowDetails visitor={visitor} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 