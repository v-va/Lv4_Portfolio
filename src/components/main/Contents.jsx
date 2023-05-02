import React, { useState } from 'react'
import Modal from '../common/Modal'
import Button from '../common/Button'

const Contents = () => {
  const [modal,setModal] = useState(false)


  return (
    <div>
    {modal === true? <Modal/>:null}

    {modal && <Modal onClose = {() => {setModal(false)}}/>}
    
      메인 본문 내용입니다.
      <Button.ButtonA size='large' onClick = {() => {setModal(true)}}>새 글 작성</Button.ButtonA>

    </div>
  )
}

export default Contents
