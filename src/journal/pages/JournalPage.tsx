import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { EmptySelectedView,NoteView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque inventore distinctio ducimus consequuntur! Alias minima itaque eaque amet reprehenderit dignissimos!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda optio, a similique ab reprehenderit perspiciatis tenetur consequatur quisquam distinctio quae, unde id voluptatum totam quidem, necessitatibus porro illum dolores voluptates delectus accusantium. Eius obcaecati quos voluptatum nesciunt atque neque quod.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus atque. Temporibus, quod alias rem quibusdam quidem dicta aliquam odit enim illum beatae quos, obcaecati quia? Eveniet alias, aperiam veniam quisquam earum illo, sapiente accusantium placeat odit optio commodi repellat obcaecati cum maiores! Vel necessitatibus perferendis molestiae numquam, aut consectetur aperiam atque doloremque omnis quibusdam earum amet ratione obcaecati expedita saepe et placeat consequatur similique a labore corporis. Ipsam, libero. Quam quos reprehenderit id? Minus officia laborum maxime, voluptas enim libero minima quaerat obcaecati? Neque officiis quo dolor reprehenderit tenetur in omnis itaque! Maxime veniam ab exercitationem veritatis blanditiis est!
      </Typography> */}
      <EmptySelectedView></EmptySelectedView>
      {/* <NoteView></NoteView> */}

      <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor:'error.main',
        ':hover':{backgroundColor: 'error.main', opacity:0.7},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined sx={{fontSize: 30}}></AddOutlined>

      </IconButton>
    </JournalLayout>
  )
}
