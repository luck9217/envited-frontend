import React from 'react'
import ImageCard from './util/ImageCard'

const urlImage="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220921T175015Z&X-Amz-Expires=86400&X-Amz-Signature=ae385cfc4632df096b75d3e4dfb12abccadd2dc999fa70f65d47c19885fb4b05&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
const altImage="Example of Envited's event"

const ExampleEvent = () => {
  return (
    <ImageCard src={urlImage} alt={altImage}></ImageCard>
  )
}

export default ExampleEvent