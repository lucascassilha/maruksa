import React from 'react';

import { Alert, Linking, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Box,
  Button,
  Label,
  Version,
  IconHolder,
  Comment,
  Title,
} from './styles';
import translate from '~/locales';
import terms from './terms';

export default function Settings() {
  const weight = useSelector(state => state.weight);

  const handleEmail = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy - HH:mm');
    Linking.openURL(
      `mailto:help@maruskapp.com?subject=Bug Report ${formattedDate}`
    );
  };

  const handleAlert = () => {
    Alert.alert(translate('supportersLabel'), translate('supportersList'));
  };

  const dispatch = useDispatch();
  const handleChangeUnit = () => {
    const changeUnit = () => {
      return {
        type: '@weight/CHANGE',
      };
    };
    dispatch(changeUnit());
  };

  const handleTerms = () => {
    Alert.alert('Terms & conditions', terms);
  };

  const handlePrivacy = () => {
    Linking.openURL('https://lucascassilha.github.io/Maruska-Privacy-Policy/');
  };

  return (
    <Container>
      <Box>
        <Title>{translate('config')}</Title>
        <Button onPress={handlePrivacy}>
          <IconHolder color="#eba833">
            <Icon name="file-document-box-multiple" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('privacy')}</Label>
        </Button>
        <Button onPress={handleTerms}>
          <IconHolder color="#42eb33">
            <Icon name="file-document" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('terms')}</Label>
        </Button>
        <Button
          onPress={() =>
            Share.share({
              title: `Maruska - ${translate('appForYourPet')}`,
              message: `${translate(
                'checkOut'
              )} app: https://play.google.com/store/apps/details?id=com.lcdev.maruska`,
            })
          }
        >
          <IconHolder color="#eb3349">
            <Icon name="share" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('shareTheApp')}</Label>
        </Button>
        <Button
          onPress={() =>
            Linking.openURL('market://details?id=com.lcdev.maruska')
          }
        >
          <IconHolder color="#33EBBF">
            <Icon name="star" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('rateUs')}</Label>
        </Button>
        <Button onPress={handleEmail}>
          <IconHolder color="#6E33EB">
            <Icon name="bug" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('reportBug')}</Label>
        </Button>
        <Button onPress={handleAlert}>
          <IconHolder color="#EBE433">
            <Icon name="account-multiple" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('supporters')}</Label>
        </Button>
        <Button onPress={handleChangeUnit}>
          <IconHolder color="#E733EB">
            <Icon name="weight" color="#fff" size={20} />
          </IconHolder>
          <Label>{`${translate('changeUnit')} (${weight}) `}</Label>
        </Button>
        <Button onPress={() => Linking.openURL('https://lucascassilha.xyz/')}>
          <IconHolder color="#000">
            <Icon name="code-tags" color="#fff" size={20} />
          </IconHolder>
          <Label>{translate('developer')}</Label>
        </Button>
        <Version>v2.0.0</Version>
        <Version>NeakApps - 2020</Version>
        <Comment>{translate('byUsing')}</Comment>
      </Box>
    </Container>
  );
}
