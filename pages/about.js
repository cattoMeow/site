import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import { components } from "../slices"
import { SliceZone } from "@prismicio/react"


const Page = ({page}) =>{
    return(
        <SliceZone slices = {page.data.slices} components = {components} />
    )
}
export default Page

export const getStaticProps = async () =>{
    const client = prismic.createClient(sm.apiEndpoint)
    const page = await client.getByUID("page", "about")

    return {
        props:{
            page
        }
    }
}