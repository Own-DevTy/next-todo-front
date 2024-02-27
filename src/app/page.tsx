import {Fragment} from "react";
import Link from "next/link";

export default function Home(){
  return (
      <Fragment>
        <h1>todoApp</h1>
        <Link href={"/todos"}>todos</Link>
      </Fragment>
  )
}