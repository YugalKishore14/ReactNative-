import { Text, View } from 'react-native';
import loginCss from "../css/loginCss";

const login = () => {
  return (
    <>
      <View style={loginCss.view}>
        <Text style={loginCss.text}>This is login page!</Text>
      </View>
    </>
  )
}

export default login
