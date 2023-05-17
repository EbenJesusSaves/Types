import React from 'react'
import { Button, View } from 'react-native/types';

interface ChildProps {

    color: string;
    onClick :()=> string 
}

// export const Child = ({color}: ChildProps) => {
//   return (
//     <View>{color}</View>
//   )
// }



export const ChildTwo :  React.FC<ChildProps> = ({color, onClick})=>{

return <View> {color}

<View >

    <Button title='Hi' onPress={onClick} />
</View>

</View>


}