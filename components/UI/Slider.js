import {ScrollView, StyleSheet, View} from 'react-native';

const Slider = ({children, ...props}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal={props.direction === 'row' ? true : false}
      vertical={props.direction === 'column' ? true : false}
      showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>{children}</View>
    </ScrollView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
