import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CONTAINER, ICON, ICONSTYLE, INPUTSEARCHSTYLE, PLACEHOLDER, SELECTEDTEXTSTYLE, DROPDOWN } from './index.styles';

const data = [
	{ label: 'Item 1', value: '1' },
	{ label: 'Item 2', value: '2' },
	{ label: 'Item 3', value: '3' },
	{ label: 'Item 4', value: '4' },
	{ label: 'Item 5', value: '5' },
	{ label: 'Item 6', value: '6' },
	{ label: 'Item 7', value: '7' },
	{ label: 'Item 8', value: '8' },
];

const Select = () => {
	const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
	return (
		<View style={CONTAINER}>
			<Text>Select </Text>
        <Dropdown
          style={[DROPDOWN, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={PLACEHOLDER}
          selectedTextStyle={SELECTEDTEXTSTYLE}
          inputSearchStyle={INPUTSEARCHSTYLE}
          iconStyle={ICONSTYLE}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={ICON}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
	)
}

export  {Select}

/**
 * https://www.npmjs.com/package/react-native-select-dropdown
 * https://www.npmjs.com/package/react-native-element-dropdown
 */