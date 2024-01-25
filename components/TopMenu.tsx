import BigTextButton from "@/components/BigTextButton";


export default function TopMenu(){


    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

<BigTextButton href="/rsvp" label="visitor.rsvp.menu.title" secondaryLabel="xxx yyy zzz"/>
<BigTextButton href="/visitors" label="visitor.p2p.menu.title" secondaryLabel="xxx yyy zzz"/>
<BigTextButton label="test" secondaryLabel="xxx yyy zzz"/>



        </div>
    )

}