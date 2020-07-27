import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  background-color: #fff;
  flex: 1;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'OpenSans-BoldItalic';
  color: #000;
`;
export const Box = styled.View`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const PetInfo = styled.View`
  flex: 1;
  background-color: #db253b;
  elevation: 2;
  padding: 10px 30px;
  justify-content: center;
`;

export const PetMenu = styled.ScrollView`
  flex: 2;
  background-color: #fff;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Avatar = styled.Image`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  margin-top: -10px;
  opacity: ${props => (props.nullImage ? 1 : 0.3)};
`;

export const InfoHolder = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;

export const InfoTextHolder = styled.View``;

export const TextColumn = styled.View``;

export const Label = styled.Text`
  color: #000;
  font-family: 'OpenSans-Italic';
  font-size: 12px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'OpenSans-Bold';
`;

export const MenuTitle = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #eb3349;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
`;

export const EmergencyHolder = styled.View`
  margin: 5px 0px;
  padding: 0px 30px;
`;

export const MenuHolder = styled.FlatList``;

export const ButtonHolder = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  margin: 5px 10px;
`;

export const Gradient = styled(LinearGradient)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageIcon = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Dot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: #f5cb42;
  position: absolute;
  z-index: 1;
  right: 0;
  elevation: 1;
`;
