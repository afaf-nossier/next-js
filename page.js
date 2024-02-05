import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h2>show all posts : </h2>
      
      <br/> 
      <button>
      <Link href={"posts/"}> display all post</Link>
      </button>
    </div>
  )
}

export default page
