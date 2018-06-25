import React, { Component } from 'react';

import {
    Toolbar, Group, SettingsPanel, Switch, Checkbox, CheckboxGroup,
    Radio, RadioGroup, Option, Selection, Input, TextArea
} from 'react-settings-panel'



class Settings extends Component {

    render() {
        return (

            <SettingsPanel color={'#728ad8'} onSubmit={this.handleSubmit}>
                <Toolbar />
                <Group>
                    <Switch name='mySwitch' title='Switch One'/>
                    <Input name='myTextField' title='InputField'/>
                    <TextArea name='myTextArea' title='Text Area One'/>
                    <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                        <Checkbox value='A' />
                        <Checkbox value='B' />
                        <Checkbox value='C' />
                    </CheckboxGroup>
                </Group>
                <Group>
                    <Selection title="Selection" name='mySelection' >
                        <Option value='a' />
                        <Option value='b' />
                        <Option value='c' />
                    </Selection>
                    <RadioGroup title="Radio Group" name='myRadio'>
                        <Radio value='A' />
                        <Radio value='B' />
                        <Radio value='C' />
                    </RadioGroup>
                </Group>

            </SettingsPanel>
        );
    }
}

export default Settings;
