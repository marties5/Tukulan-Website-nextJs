import Head from "next/head"

export default function Layout(props){
    return (
<div>
    <Head>
        <title>{props.title}</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Sky_Group_logo_2020.svg/1024px-Sky_Group_logo_2020.svg.png"></link>
    </Head>
    {props.childern}
</div>
    )
}