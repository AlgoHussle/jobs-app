import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity >
      <Image  
        src={iconUrl}
        resizeMode='cover'
        
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn