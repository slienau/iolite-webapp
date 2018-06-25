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
                    <Switch name='mySwitch' title='Stop Recording data'/>

                    <Switch name='mySwitch' title='Toggel Daymode'/>
                    <Selection title="Views" name='mySelection' >
                        <Option value='View 0' />
                        <Option value='View 1' />
                        <Option value='View 2' />
                    </Selection>
                </Group>
                <Group>

                    <Input name='Preis_Pro_KwH' title='Preis Pro KwH'/>

                    <RadioGroup title="Währung" name='Währung'>
                        <Radio value='€' />
                        <Radio value='$' />
                        <Radio value='Ø' />
                    </RadioGroup>
                    <RadioGroup title="Sprache" name='Währung'>
                        <Radio value='DE' />
                        <Radio value='EN' />
                        <Radio value='RUS' />
                    </RadioGroup>
                </Group>

            </SettingsPanel>
        );
    }
}

export default Settings;
