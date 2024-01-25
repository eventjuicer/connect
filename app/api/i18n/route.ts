
export async function GET( ) {

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { 
        tags: ["i18n"],
        revalidate: 3600
       }, 
    })

    const data = await res.json()

    return Response.json(data)
  }